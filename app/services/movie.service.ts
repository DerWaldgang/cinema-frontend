import { IMovieEditInput } from '@/components/screens/admin/movies/MovieEdit/movie-edit.interface'

import { IMovie } from '@/shared/types/movies.types'

import axios, { axiosClassic } from '@/utils/api/interceptors'

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

	async createMovie() {
		return axios.post<string>(getMoviesUrl(''))
	},

	async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},

	async updateMovie(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},

	async getByIdMovie(_id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},
}
