import { UserService } from '@/services/user.service'
import { useQuery } from 'react-query'
import { useAuth } from '../auth/useAuth'



export const useFavorites = () => {

	const {user} = useAuth()
	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery('User favorite movies', () => UserService.getUserFavoriteMovies(), {
		select: ({ data }) => data,
		enabled: !!user
	})
	return { isLoading, favoriteMovies, refetch }
}