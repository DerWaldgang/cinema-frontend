import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import AdminNavigation from '@/components/ui/admin-ui/admin-nav/AdminNavigation'
import Button from '@/components/ui/buttons/Button'
import Heading from '@/components/ui/heading/Heading'
import AuthInputField from '@/components/ui/input-fields/auth-field/AuthInputField'
import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import { useUserEdit } from '@/hooks/admin/edit/useUserEdit'

import Meta from '@/utils/meta/Meta'

import { IUserEditInput } from './user-edit.interface'

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		})
	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Meta title="Edit user">
			<AdminNavigation />
			<Heading title="Edit user" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className="admin-form">
				{isLoading ? (
					<SkeletonLoading count={2} className="h-36" />
				) : (
					<>
						<AuthInputField errors={formState.errors} register={register} />
						<Controller
							control={control}
							name="isAdmin"
							render={({ field }) => (
								<button
									onClick={(e) => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
									className={'text-link block mb-7 '.concat(field.value ? 'text-white' : ' text-primary')}
								>
									{field.value ? 'Make user' : 'Make admin'}
								</button>
							)}
						/>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default UserEdit
