import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import MoviesCatalog from '@/components/ui/catalog/MoviesCatalog'

import { IGenre, IMovie } from '@/shared/types/movies.types'

import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie.service'

import Error404 from '../404'

export interface IGenrePage {
	movies: IMovie[]
	genre: IGenre | undefined
}

const NavigationGenrePage: NextPage<IGenrePage> = ({ movies, genre }) => {
	return genre ? (
		<MoviesCatalog
			movies={movies || []}
			title={genre.name}
			description={genre.description}
		/>
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAllGenres()
		const paths = genres.map((genre) => ({
			params: { slug: genre.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return {
			fallback: false,
			paths: [],
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlugGenre(
			String(params?.slug)
		)
		const { data: movies } = await MovieService.getMoviesByGenres([genre._id])
		return {
			props: {
				movies,
				genre,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default NavigationGenrePage
