import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SubHeading from '@/components/ui/heading/SubHeading'
import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import { IMovie } from '@/shared/types/movies.types'

import { MovieService } from '@/services/movie.service'

import { getMovieSlugUrl } from '@/config/url.config'

import styles from '../Admin.module.scss'

const MostPopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Most popular movie for admin',
		() => MovieService.getMostPopularMovies(),
		{ select: (data): IMovie => data[0] }
	)

	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoading className="h-48" />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMovieSlugUrl(movie.slug)}>
							{
								<Image
									width={285}
									height={176}
									src={movie.bigPoster}
									alt={movie.title}
									className={styles.image}
									unoptimized
								/>
							}
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default MostPopularMovie
