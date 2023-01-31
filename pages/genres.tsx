
import Catalogs from '@/components/screens/catalogs-collections/Catalogs'
import { ICatalog } from '@/components/screens/catalogs-collections/catalogs.interface'

import { GenreService } from '@/services/genre.service'

import { GetStaticProps, NextPage } from 'next'
import Error404 from './404'

const CatalogsPage: NextPage<{collections: ICatalog[]}> = ({collections}) => {

    return collections ? (
		<Catalogs collections={collections || []} />
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async() => {
    try {
        const {data: collections} = await GenreService.getMovieCatalogs()

        return {
            props: {
                collections
            },
            revalidate: 60,
        }
        
    } catch (error) {
        return {
            notFound: true,
        }
    }
}
export default CatalogsPage