import { useQuery } from 'react-query'

import { IOptions } from '@/components/ui/select/select.interface'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast/toast-error'

export const useGenreLabelSelector = () => {
	const queryData = useQuery(
		'genres-label-selector',
		() => GenreService.getAllGenres(),
		{
			select: ({ data }) =>
				data.map(
					(genre): IOptions => ({ label: genre.name, value: genre._id })
				),
			onError: (error) => {
				toastError(error, 'Genres label selector error')
			},
		}
	)

	return queryData
}
