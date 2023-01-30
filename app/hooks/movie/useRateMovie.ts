import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'


import { ratingService } from '@/services/rating.service'

import { toastError } from '@/utils/toast/toast-error'
import { toast } from 'react-toastify'
import { usePopularMovies } from './usePopularMovies'

export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)

	const { refetch } = useQuery(
		['user movie rating', movieId],
		() => ratingService.getByUserMovieRating(movieId),
		{
			onSuccess:({ data }) => {
				setRating(data)
			},
			onError:(error)=> {
				toastError(error, 'Cant get the movie rating')
			},
			enabled: !!movieId, // enabled if there is query.id
		}
	)

	const {refetchPopularMovies} = usePopularMovies()

	const { mutateAsync: rateMovie } = useMutation(
		'set movie rating',
		({ value }: { value: number }) => ratingService.setRating(movieId, value),
		{
			onSuccess: () => {
				toast.success(
					'The movie rating successfully updated'
				)
				setIsSended(true)
				refetch()
				refetchPopularMovies()
				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},
			onError: (error) => {
				toastError(error, 'The movie rating not updated')
			},
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await rateMovie({ value: nextValue })
	}

	return { isSended, rating, handleClick }
}
