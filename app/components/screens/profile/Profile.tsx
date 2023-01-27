import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/buttons/Button'
import Heading from '@/components/ui/heading/Heading'
import AuthInputField from '@/components/ui/input-fields/auth-field/AuthInputField'
import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import { useProfile } from '@/hooks/useProfile'

import Meta from '@/utils/meta/Meta'

import styles from './Profile.module.scss'
import { IProfileField } from './profile.interface'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileField>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<Meta title="Profile">
			<Heading title="Profile" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoading count={2} className='h-20'/>
				) : (
					<AuthInputField formState={formState} register={register} />
				)}

				<Button type="submit">Update</Button>
			</form>
		</Meta>
	)
}

export default Profile
