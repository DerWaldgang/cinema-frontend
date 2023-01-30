import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { getGenreSlugUrl } from '@/config/url.config'

import { IMenuItem } from '../../components/layout/Navigation/Menu/menu.interface'
import { toastError } from '@/utils/toast/toast-error'

export const useGenres = () => {
	const queryData = useQuery('genres-menu', () => GenreService.getAllGenres(), {
		select: ({ data }) =>
			data
				.filter((genre) => genre.icon)
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenreSlugUrl(genre.slug),
							title: genre.name,
						} as IMenuItem)
				)
				.splice(0, 4),
		onError: (error) => {
			toastError(error, 'Genres menu not found')
		},
	})

	return queryData
}
