import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'


import { IMovieEditInput } from '@/components/screens/admin/movies/MovieEdit/movie-edit.interface'

import { MovieService } from '@/services/movie.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast/toast-error'

import { getAdminUrl } from '@/config/url.config'
import { toast } from 'react-toastify'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { query, push } = useRouter()

	const movieId: string = String(query.id)

	const { isLoading } = useQuery(
		[' get movie by id', movieId],
		() => MovieService.getByIdMovie(movieId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Cant get the movie')
			},
			enabled: !!query.id, // enabled if there is query.id
		}
	)

	const { mutateAsync: updateAsync } = useMutation(
		'edit movie',
		(data: IMovieEditInput) => MovieService.updateMovie(movieId, data),
		{
			onSuccess() {
				toast.success('Movie successfully updated')
				push(getAdminUrl('movies'))
			},
			onError(error) {
				toastError(error, 'Movie not updated')
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await updateAsync(data)
	}

	return { onSubmit, isLoading }
}
