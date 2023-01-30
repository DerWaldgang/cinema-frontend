import { FC } from 'react'
import StarRating from 'react-star-rating-component'

import { useAuth } from '@/hooks/auth/useAuth'
import { useRateMovie } from '@/hooks/useRateMovie'

import styles from './RateMovie.module.scss'

const RateMovie: FC<{ movieId: string }> = ({ movieId }) => {
	const { user } = useAuth()

	const { isSended, rating, handleClick } = useRateMovie(movieId)
	return user ? (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve reccomendations</p>
			{isSended ? (
				<div className={styles.message}>Thanks for rating!</div>
			) : (
				<StarRating
					name="star-rating"
					value={rating}
					onStarClick={handleClick}
					emptyStarColor="#4f4f4f"
				/>
			)}
		</div>
	) : null
}

export default RateMovie
