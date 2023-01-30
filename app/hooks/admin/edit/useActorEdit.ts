import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { IActorEditInput } from '@/components/screens/admin/actors/ActorEdit/actor-edit.interface'

import { ActorService } from '@/services/actor.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { query, push } = useRouter()

	const actorId: string = String(query.id)

	const { isLoading } = useQuery(
		[' get actor by id', actorId],
		() => ActorService.getByIdActor(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Cant get the actor')
			},
			enabled: !!query.id, // enabled if there is query.id
		}
	)

	const { mutateAsync: updateAsync } = useMutation(
		'edit actor',
		(data: IActorEditInput) => ActorService.updateActor(actorId, data),
		{
			onSuccess: () => {
				toast.success('Actor successfully updated')
				push(getAdminUrl('actors'))
			},
			onError: (error) => {
				toastError(error, 'Actor not updated')
			},
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await updateAsync(data)
	}

	return { onSubmit, isLoading }
}
