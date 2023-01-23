import { useQuery } from 'react-query'

import { IOptions } from '@/components/ui/select/select.interface'

import { toastrError } from '@/utils/toastr/toast-error'
import { ActorService } from '@/services/actor.service'

export const useActorLabelSelector = () => {
	const queryData = useQuery(
		'actors-label-selector',
		() => ActorService.getAllActors(),
		{
			select: ({ data }) =>
				data.map(
					(actor): IOptions => ({ label: actor.name, value: actor._id })
				),
			onError: (error) => {
				toastrError(error, 'Actors label selector error')
			},
		}
	)

	return queryData
}