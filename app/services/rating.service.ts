import { getRatingsUrl } from "@/config/api.config"
import axios from "@/utils/api/interceptors"

export const ratingService = {
    async setRating(movieId: string, value: number) {
        return axios.post<string>(getRatingsUrl('set-rating'), {
            movieId, value
        })
    }, 
    
    async getByUserMovieRating(movieId: string) {
        return axios.get<number>(getRatingsUrl(`${movieId}`))
    }
}