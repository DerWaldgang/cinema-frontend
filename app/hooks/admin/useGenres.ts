import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'


import { ITableItem } from '@/components/ui/admin-ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/genre.service'

import { getAdminUrl } from '@/config/url.config'
import { toast } from 'react-toastify'
import { toastError } from '@/utils/toast/toast-error'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['genre list', debouncedSearch],
		() => GenreService.getAllGenres(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
					})
				),
			onError(error) {
				toastError(error, 'genre list')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create genre',
		() => GenreService.createGenre(),
		{
			onError: (error) => {
				toastError(error, 'Create genre')
			},
			onSuccess: ({ data: _id }) => {
				toast.success('Genre was created successfully')
				push(getAdminUrl(`genre/edit/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId: string) => GenreService.deleteGenre(genreId),
		{
			onError: (error) => {
				toastError(error, 'Delete genre')
			},
			onSuccess: () => {
				toast.success('Genre was deleted successfully')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}

