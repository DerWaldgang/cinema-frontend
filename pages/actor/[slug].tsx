import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import MoviesCatalog from '@/components/ui/catalog/MoviesCatalog'

import { IActor, IMovie } from '@/shared/types/movies.types'

import { MovieService } from '@/services/movie.service'

import Error404 from '../404'
import { ActorService } from '@/services/actor.service'

export interface IActorPage {
	movies: IMovie[]
	actor: IActor | undefined
}

const NavigationActorPage: NextPage<IActorPage> = ({ movies, actor }) => {
	return actor ? (
		<MoviesCatalog
			movies={movies || []}
			title={actor.name}
			description={`Here you can find movies with your favorite actor - ${actor.name}`}
		/>
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAllActors()
		const paths = actors.map((actor) => ({
			params: { slug: actor.slug },
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
		const { data: actor } = await ActorService.getBySlugActor(
			String(params?.slug)
		)

		const { data: movies } = await MovieService.getMoviesByActor(actor._id)
  
		return {
			props: {
				movies,
				actor,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default NavigationActorPage
