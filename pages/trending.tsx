import MoviesCatalog from '@/components/ui/catalog/MoviesCatalog'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movies.types'
import { GetStaticProps, NextPage } from 'next'

const TrendingsMoviesPage: NextPage<{movies: IMovie[]}> = ({movies}) => {

    return <MoviesCatalog movies={movies || []} title='Trending' description='Trendings movies and series in excellent quality!'/>
}


export const getStaticProps: GetStaticProps = async () => {
    try {

        const movies = await MovieService.getMostPopularMovies()

        return {
            props: {
                movies
            }
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}
export default TrendingsMoviesPage