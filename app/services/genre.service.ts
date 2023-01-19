import { getGenresUrl } from "@/config/api.config"
import { IGenre } from "@/shared/types/movies.types"
import axios, { axiosClassic } from "@/utils/api/interceptors"


export const GenreService = {
    async getAllGenres (searchTerm?: string){
        return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
            params: searchTerm ? {
                searchTerm
            } : {},
        })
    },

    async createGenre() {
		return axios.post<string>(getGenresUrl(''))
	},

	// async updateGenre(_id: string, data: IGenreEditInput) {
	// 	return axios.put<string>(getGenresUrl(`/${_id}`), data)
	// },

	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},

}