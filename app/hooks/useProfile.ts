import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IProfileField } from '@/components/screens/profile/profile.interface'

import { UserService } from '@/services/user.service'

import { toastrError } from '@/utils/toastr/toast-error'

export const useProfile = (setValue: UseFormSetValue<IProfileField>) => {
	const { isLoading } = useQuery(
		'user-profile',
		() => UserService.getProfile(),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
			},
			onError(error) {
				toastrError(error, 'Cant get profile')
			},
		}
	)

	const { mutateAsync: updateAsync } = useMutation(
		'edit user-profile',
		(data: IProfileField) => UserService.updateProfile(data),
		{
			onSuccess() {
				toastr.success('Updating user', 'Successfully updated')
			},
			onError(error) {
				toastrError(error, 'Profile not updated')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileField> = async (data) => {
		await updateAsync(data)
	}

	return { onSubmit, isLoading }
}
