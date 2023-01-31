import Link from 'next/link'
import { FC } from 'react'

import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'
import { IMovieList } from './movie-list.interface'
import SpanPlug from '@/components/ui/span-plug/SpanPlug'

const MovieList: FC<IMovieList> = ({ title, link, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.length ? (
				movies.map((movie) => <MovieItem key={movie._id} movie={movie} />)
			) : (
				<SpanPlug text={'No favorites'}/>
			)}
			<Link href={link} className={styles.button}>
				{link === '/trending' ? 'See more popular' : 'My Favorites'}
			</Link>
		</div>
	)
}

export default MovieList
