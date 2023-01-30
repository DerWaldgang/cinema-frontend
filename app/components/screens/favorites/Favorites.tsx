import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'
import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import { useFavorites } from '@/hooks/movie/useFavorites'

import Meta from '@/utils/meta/Meta'

import FavoriteItem from './FavoriteItem'
import styles from './Favorites.module.scss'
import SpanPlug from '@/components/ui/span-plug/SpanPlug'
import Link from 'next/link'

const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()
	return (
		<Meta title="Favorites">
			<Heading title={'Favorites'} />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoading
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoriteMovies?.length ? 
					favoriteMovies.map((movie) => (
						<FavoriteItem key={movie._id} movie={movie} />
					)) : <Link href={'/fresh'}><SpanPlug text={'Add some favorites :)'} classname='text-link'/></Link>
				)}
			</section>
		</Meta>
	)
}

export default Favorites
