import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/icon/MaterialIcon'

import { IMovie } from '@/shared/types/movies.types'

import { getGenreEachList } from '@/utils/movie/getGenreEachList'

import { getGenreSlugUrl, getMovieSlugUrl } from '@/config/url.config'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieSlugUrl(movie.slug)}>
				<Image
					width={65}
					height={97}
					draggable={false}
					alt={movie.title}
					src={movie.poster}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>

					<div className={styles.genres}>
						{movie.genres.map((genre, index) => (
							<Link href={getGenreSlugUrl(genre.slug)} key={genre._id}>
								{getGenreEachList(index, movie.genres.length, genre.name)}
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
