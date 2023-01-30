import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import { getMovieSlugUrl } from '@/config/url.config'

import styles from './MoviesCatalog.module.scss'
import { ICatalog } from './catalog.interface'

import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'

const MoviesCatalog: FC<ICatalog> = ({ title, description, movies }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && (
				<Description text={description} className={styles.description} />
			)}

			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						item={{
							name: movie.title,
							link: getMovieSlugUrl(movie.slug),
							posterPath: movie.bigPoster,
							content: {
								title: movie.title,
							},
						}}
						variant="horizontal"
					/>
				))}
			</section>
		</Meta>
	)
}

export default MoviesCatalog
