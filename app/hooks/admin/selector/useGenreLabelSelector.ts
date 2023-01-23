import { useQuery } from 'react-query'

import { IOptions } from '@/components/ui/select/select.interface'

import { GenreService } from '@/services/genre.service'

import { toastrError } from '@/utils/toastr/toast-error'

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
				toastrError(error, 'Genres label selector error')
			},
		}
	)

	return queryData
}
