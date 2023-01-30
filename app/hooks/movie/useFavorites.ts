import { UserService } from '@/services/user.service'
import { useQuery } from 'react-query'



export const useFavorites = () => {
	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery('User favorite movies', () => UserService.getUserFavoriteMovies(), {
		select: ({ data }) => data,
	})
	return { isLoading, favoriteMovies, refetch }
}