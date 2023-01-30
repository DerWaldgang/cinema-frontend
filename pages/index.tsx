import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenreEachList'

import { getActorSlugUrl, getMovieSlugUrl } from '@/config/url.config'

import Error404 from './404'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return trendingMovies ? (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAllMovies()

		const slides: ISlide[] = movies.slice(0, 3).map((movie) => ({
			_id: movie._id,
			link: getMovieSlugUrl(movie.slug),
			bigPoster: movie.bigPoster,
			subTitle: getGenresList(movie.genres),
			title: movie.title,
		}))

		const { data: actorsData } = await ActorService.getAllActors()

		const actors: IGalleryItem[] = actorsData.slice(0, 7).map((actor) => ({
			name: actor.name,
			posterPath: actor.photo,
			link: getActorSlugUrl(actor.slug),
			content: {
				title: actor.name,
				subTitle: `+ ${actor.countMovies} movies`,
			},
		}))

		const mostPopularMovies = await MovieService.getMostPopularMovies()

		const trendingMovies = mostPopularMovies.slice(0, 7).map((movie) => ({
			name: movie.title,
			posterPath: movie.poster,
			link: getMovieSlugUrl(movie.slug),
		}))

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
			revalidate: 60,
		}
	} catch (error) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			},
		}
	}
}

export default HomePage
