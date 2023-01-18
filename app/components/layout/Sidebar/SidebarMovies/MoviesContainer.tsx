import React from 'react'

import SidebarFavoriteMovies from './SidebarFavoriteMovies/SidebarFavoriteMovies'
import SidebarPopularMovies from './SidebarPopularMovies'

const MoviesContainer = () => {
	return (
		<div>
			<SidebarPopularMovies />
			<SidebarFavoriteMovies />
		</div>
	)
}

export default MoviesContainer
