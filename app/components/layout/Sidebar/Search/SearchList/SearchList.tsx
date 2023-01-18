import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movies.types'

import { getMovieSlugUrl } from '@/config/url.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={getMovieSlugUrl(movie.slug)}>
						<Image
							src={movie.poster}
							width={50}
							height={50}
							alt={movie.title}
                            draggable={false}
							className={styles.img}
						/>
                        <span className={styles.span}>{movie.title}</span>
					</Link>
				))
			) : (
				<div className={styles.notFound}>Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
