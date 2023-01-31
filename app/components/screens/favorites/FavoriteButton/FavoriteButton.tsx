import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import { useFavorites } from '@/hooks/movie/useFavorites'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast/toast-error'

import styles from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'
import { useAuth } from '@/hooks/auth/useAuth'

const FavoriteButton: FC<{ movieId: string, isAbsolute?: boolean }> = ({ movieId, isAbsolute}) => {

	const {user} = useAuth()

	if(!user) return null
	
	const [isHeartClicked, setIsHeartClicked] = useState(false)

	const { favoriteMovies, refetch } = useFavorites()

	useEffect(() => {
		if (!favoriteMovies) return

		const isHasMovie = favoriteMovies.some(
			(favorite) => favorite._id === movieId
		)

		if (isHeartClicked !== isHasMovie) setIsHeartClicked(isHasMovie)
	}, [movieId, isHeartClicked, favoriteMovies])

	const { mutateAsync } = useMutation(
		'update favorites',
		() => UserService.toggleUserFavoriteMovie(movieId),
		{
			onSuccess: () => {
				setIsHeartClicked(!isHeartClicked)
				refetch()
			},
			onError: (error) => {
				toastError(error, 'Cant toggle favorite movie')
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isHeartClicked,
                [styles.button]: isAbsolute ? 'absolute right-0 bottom-20' : ' '
			})}
			style={{ backgroundImage: `url('/heart-animation.png')` }}
		/>
	)
}

export default FavoriteButton
