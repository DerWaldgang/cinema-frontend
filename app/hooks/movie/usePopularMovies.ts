import { MovieService } from "@/services/movie.service"
import { useQuery } from "react-query"

export const usePopularMovies = () => {
    const { isLoading, data: popularMovies, refetch: refetchPopularMovies} = useQuery(
		'Get most popular movies in sidebar',
		() => MovieService.getMostPopularMovies()
	)

    return {isLoading, popularMovies, refetchPopularMovies}
}