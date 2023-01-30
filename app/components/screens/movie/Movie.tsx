import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'

import { IMovie } from '@/shared/types/movies.types'

import Meta from '@/utils/meta/Meta'

import Content from './Content/Content'

import { IMoviePage } from '../../../../pages/movie/[slug]'

const DynamicRateMovie = dynamic(
	() => import('./RateMovie/RateMovie'),
	{
		ssr: false,
	}
)
const DynamicVideoPlayer = dynamic(
	() => import('@/components/ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
)

const Movie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return (
		<Meta title={movie?.title || 'Movie'} description={`Watch ${movie?.title}`}>
			<Banner
				image={movie?.bigPoster || ''}
				Detail={() => <Content movie={movie || ({} as IMovie)} />}
			/>
			<DynamicVideoPlayer slug={movie.slug} videoSource={movie.videoUrl} />
			<div className="mt-12">
				<SubHeading title="Similar movies" />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRateMovie movieId={movie._id}/>
		</Meta>
	)
}

export default Movie
