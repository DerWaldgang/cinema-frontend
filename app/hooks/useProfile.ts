import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'


import { IProfileField } from '@/components/screens/profile/profile.interface'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast/toast-error'
import { toast } from 'react-toastify'

export const useProfile = (setValue: UseFormSetValue<IProfileField>) => {
	const { isLoading } = useQuery(
		'user-profile',
		() => UserService.getProfile(),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
			},
			onError(error) {
				toastError(error, 'Cant get profile')
			},
		}
	)

	const { mutateAsync: updateAsync } = useMutation(
		'edit user-profile',
		(data: IProfileField) => UserService.updateProfile(data),
		{
			onSuccess() {
				toast.success('Profile was successfully updated')
			},
			onError(error) {
				toastError(error, 'Profile updated')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileField> = async (data) => {
		await updateAsync(data)
	}

	return { onSubmit, isLoading }
}
