
import MovieList from '@/components/screens/admin/movies/MoviesList'
import { NextPageAuth } from '@/shared/types/auth.types'

const MovieListPage: NextPageAuth = () => {

    return <MovieList/>
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage