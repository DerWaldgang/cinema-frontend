import { getGenresUrl } from "@/config/api.config"
import { IGenre } from "@/shared/types/movies.types"
import { axiosClassic } from "@/utils/api/interceptors"


export const GenreService = {
    async getAllGenres (searchTerm?: string){
        return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
            params: searchTerm ? {
                searchTerm
            } : {},
        })
    }
}