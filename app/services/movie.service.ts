import { axiosClassic } from '@/utils/api/interceptors'

import { IMovie } from '@/shared/types/movies.types'

import { getMoviesUrl } from '@/config/api.config'

export const MovieService = {
	async getAllMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('most-popular')
		)
		return movies
	},
}
