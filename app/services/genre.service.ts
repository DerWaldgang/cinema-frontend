import { IGenreEditInput } from '@/components/screens/admin/genres/GenreEdit/genre-edit.interface'

import { IGenre } from '@/shared/types/movies.types'

import axios, { axiosClassic } from 'api/interceptors'

import { getGenresUrl } from '@/config/api.config'
import { ICatalog } from '@/components/screens/catalogs-collections/catalogs.interface'


export const GenreService = {
	async getAllGenres(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getBySlugGenre(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`by-slug/${slug}`))
	},

	async getMovieCatalogs() {
		return axiosClassic.get<ICatalog[]>(getGenresUrl(`catalogs`))
	},

    // IGenreEditInput ? 
	async getByIdGenre(_id?: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`${_id}`))
	},
	async createGenre() {
		return axios.post<string>(getGenresUrl(''))
	},

	async updateGenre(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`${_id}`), data)
	},

	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`${_id}`))
	},
}
