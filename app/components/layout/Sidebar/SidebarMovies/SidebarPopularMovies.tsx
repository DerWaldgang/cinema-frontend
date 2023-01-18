import React from 'react'
import { useQuery } from 'react-query'

import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import { MovieService } from '@/services/movie.service'

import MovieList from './MovieList'

const SidebarPopularMovies = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'Get most popular movies in sidebar',
		() => MovieService.getMostPopularMovies()
	)
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoading count={3} className="h-28 mb-4" />
		</div>
	) : (
		<div>
			<MovieList link='/trending' movies={popularMovies || []} title='Popular Movies'/>
		</div>
	)
}

export default SidebarPopularMovies
