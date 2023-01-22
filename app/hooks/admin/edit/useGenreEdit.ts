import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { IGenreEditInput } from '@/components/screens/admin/genres/GenreEdit/genre-edit.interface'

import { GenreService } from '@/services/genre.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastrError } from '@/utils/toastr/toast-error'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '@/config/url.config'

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { query, push } = useRouter()

	const genreId: string = String(query.id)

	const {isLoading} = useQuery(
		[' get genre by id', genreId],
		() => GenreService.getByIdGenre(genreId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastrError(error, 'Cant get the genre')
			},
			enabled: !!query.id, // enabled if there is query.id
		}
	)

    const {mutateAsync: updateAsync} = useMutation('edit genre',(data: IGenreEditInput) => GenreService.updateGenre(genreId, data), {
        onSuccess() {
           toastr.success('Updating genre', 'Successfully updated')
           push(getAdminUrl('genres'))
        },
        onError(error) {
            toastrError(error, 'Genre not updated')
        },
    })
    

    const onSubmit:SubmitHandler<IGenreEditInput> = async (data) => {
        await updateAsync(data)
    }

    return {onSubmit, isLoading}
}  
