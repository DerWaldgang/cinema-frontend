import React from 'react'

import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import { usePopularMovies } from '@/hooks/movie/usePopularMovies'

import MovieList from '../MovieList'

const PopularMovies = () => {
	const { isLoading, popularMovies } = usePopularMovies()

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoading count={3} className="h-28 mb-4" />
		</div>
	) : (
		<div>
			<MovieList
				link="/trending"
				movies={popularMovies?.slice(0, 3) || []}
				title="Popular Movies"
			/>
		</div>
	)
}

export default PopularMovies
