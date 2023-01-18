import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'
import React from 'react'

import Menu from '../Menu'
import { useGenres } from '../../../../../hooks/useGenres'

const GenreMenu = () => {
	const { isLoading, data } = useGenres()

	return isLoading ? (
		<div className="mx-11 mb-6"><SkeletonLoading count={4} className='h-7 mt-6'/></div>
	) : (
		<Menu menu={{ title: 'Genres', items: data || [] }} />
	)
}

export default GenreMenu
