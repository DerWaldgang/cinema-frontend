import dynamic from 'next/dynamic'
import React from 'react'

import PopularMovies from './Popular/PopularMovies'

const DynamicFavoriteMovies = dynamic(() => import('./Favorite/FavoriteMovies'), {
	ssr: false
})

const MoviesContainer = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoriteMovies />
		</div>
	)
}

export default MoviesContainer
