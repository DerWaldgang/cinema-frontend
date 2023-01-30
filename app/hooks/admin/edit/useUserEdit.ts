import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'

import { IUserEditInput } from '@/components/screens/admin/users/UserEdit/user-edit.interface'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { query, push } = useRouter()

	const userId: string = String(query.id)

	const { isLoading } = useQuery(
		[' get user by id', userId],
		() => UserService.getByIdUser(userId),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			onError(error) {
				toastError(error, 'Cant get the user')
			},
			enabled: !!query.id, // enabled if there is query.id
		}
	)

	const { mutateAsync: updateAsync } = useMutation(
		'edit user',
		(data: IUserEditInput) => UserService.updateUser(userId, data),
		{
			onSuccess() {
				toast.success('User successfully updated')
				push(getAdminUrl('users'))
			},
			onError(error) {
				toastError(error, 'User not updated')
			},
		}
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await updateAsync(data)
	}

	return { onSubmit, isLoading }
}
