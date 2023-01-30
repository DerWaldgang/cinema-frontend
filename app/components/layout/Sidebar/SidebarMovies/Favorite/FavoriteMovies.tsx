import React from 'react'

import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import { useAuth } from '@/hooks/auth/useAuth'
import { useFavorites } from '@/hooks/movie/useFavorites'

import NotAuthFavorites from './NotAuthFavorites'

import MovieList from '../MovieList'

const FavoriteMovies = () => {
	const { favoriteMovies, isLoading } = useFavorites()
	const { user } = useAuth()

	if (!user) return <NotAuthFavorites />

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoading count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/favorites"
			movies={favoriteMovies?.slice(0, 3) || []}
			title={'Favorites'}
		/>
	)
}

export default FavoriteMovies
