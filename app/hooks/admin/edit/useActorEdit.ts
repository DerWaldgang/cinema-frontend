
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { ActorService } from '@/services/actor.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastrError } from '@/utils/toastr/toast-error'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '@/config/url.config'
import { IActorEditInput } from '@/components/screens/admin/actors/ActorEdit/actor-edit.interface'

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { query, push } = useRouter()

	const actorId: string = String(query.id)

	const {isLoading} = useQuery(
		[' get actor by id', actorId],
		() => ActorService.getByIdActor(actorId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastrError(error, 'Cant get the actor')
			},
			enabled: !!query.id, // enabled if there is query.id
		}
	)

    const {mutateAsync: updateAsync} = useMutation('edit actor',(data: IActorEditInput) => ActorService.updateActor(actorId, data), {
        onSuccess() {
           toastr.success('Updating actor', 'Successfully updated')
           push(getAdminUrl('actors'))
        },
        onError(error) {
            toastrError(error, 'Actor not updated')
        },
    })
    

    const onSubmit:SubmitHandler<IActorEditInput> = async (data) => {
        await updateAsync(data)
    }

    return {onSubmit, isLoading}
}  
