import { FC } from 'react'

import MaterialIcon from '@/components/ui/icon/MaterialIcon'

import { IMovie } from '@/shared/types/movies.types'

import { getActorSlugUrl, getGenreSlugUrl } from '@/config/url.config'

import styles from './Content.module.scss'
import ContentList from './ContentList/ContentList'
import dynamic from 'next/dynamic'

const DynamicFavoriteButton = dynamic(() => import('../../favorites/FavoriteButton/FavoriteButton')) 
const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>

			<div className={styles.details}>
				<span>{movie.parameters.year}. </span>
				<span>{movie.parameters.country}. </span>
				<span>{movie.parameters.duration} min.</span>
			</div>

			<ContentList
				name="Genres: "
				links={movie.genres.slice(0, 3).map((genre) => ({
					_id: genre._id,
					link: getGenreSlugUrl(genre.slug),
					title: genre.name,
				}))}
			/>
			<ContentList
				name="Actors: "
				links={movie.actors.slice(0, 3).map((actor) => ({
					_id: actor._id,
					link: getActorSlugUrl(actor.slug),
					title: actor.name,
				}))}
			/>

			<div className={styles.rating}>
				<div>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
				<DynamicFavoriteButton movieId={movie._id}/>
			</div>


		</div>
	)
}

export default Content
