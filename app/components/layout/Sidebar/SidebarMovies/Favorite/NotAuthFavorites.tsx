import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const NotAuthFavorites = () => {
	return (
		<div className="mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80 text-link text-center">
			<Link
				href={`/auth`}
			>
				You have to be authorized to see your favorites.
			</Link>
		</div>
	)
}

export default NotAuthFavorites
