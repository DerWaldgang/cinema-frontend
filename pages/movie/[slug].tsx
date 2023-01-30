import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Movie from '@/components/screens/movie/Movie'
import MoviesCatalog from '@/components/ui/catalog/MoviesCatalog'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import { IMovie } from '@/shared/types/movies.types'

import { MovieService } from '@/services/movie.service'

import { getMovieSlugUrl } from '@/config/url.config'

import Error404 from '../404'

export interface IMoviePage {
	movie: IMovie 
	similarMovies: IGalleryItem[]
}

const NavigationMoviePage: NextPage<IMoviePage> = ({
	similarMovies,
	movie,
}) => {
	return movie ? (
		<Movie similarMovies={similarMovies || []} movie={movie} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAllMovies()
		const paths = movies.map((movie) => ({
			params: { slug: movie.slug },
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
		const { data: movie } = await MovieService.getBySlugMovie(
			String(params?.slug)
		)

		const { data: similarMoviesByGenre } = await MovieService.getMoviesByGenres(
			movie.genres.map((genre) => genre._id)
		)

		const similarMovies: IGalleryItem[] = similarMoviesByGenre
			.filter((movies) => movies._id !== movie._id)
			.map((movie) => ({
				name: movie.title,
				posterPath: movie.poster,
				link: getMovieSlugUrl(movie.slug),
			}))

		return {
			props: {
				similarMovies,
				movie,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default NavigationMoviePage
