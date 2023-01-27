import MoviesCatalog from '@/components/ui/catalog/MoviesCatalog'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movies.types'
import { GetStaticProps, NextPage } from 'next'

const NewMoviesPage: NextPage<{movies: IMovie[]}> = ({movies}) => {

    return <MoviesCatalog movies={movies || []} title='Fresh' description='New movies and series in excellent quality!'/>
}


export const getStaticProps: GetStaticProps = async () => {
    try {

        const {data: movies} = await MovieService.getAllMovies()

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
export default NewMoviesPage