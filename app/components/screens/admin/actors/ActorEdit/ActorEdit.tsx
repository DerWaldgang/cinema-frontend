import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/components/ui/admin-ui/admin-nav/AdminNavigation'
import Button from '@/components/ui/buttons/Button'
import Heading from '@/components/ui/heading/Heading'
import InputField from '@/components/ui/input-fields/InputField'
import SlugField from '@/components/ui/input-fields/slug-field/SlugField'
import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import styles from '@/ui/input-fields/AdminForms.module.scss'

import { useActorEdit } from '@/hooks/admin/edit/useActorEdit'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import { IActorEditInput } from './actor-edit.interface'
import UploadField from '@/components/ui/input-fields/upload-field/UploadField'


const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useActorEdit(setValue)
  
	return (
		<Meta title="Edit actor">
			<AdminNavigation />
			<Heading title="Edit actor" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoading count={2} className="h-36" />
				) : (
					<>
						<div className={styles.fields}>
							<InputField
								{...register('name', {
									required: 'Name is required',
								})}
								placeholder="Name"
								error={errors.name}
							/>

							<SlugField
								register={register}
								error={errors.slug}
								generate={() => {
									setValue('slug', generateSlug(getValues('name')))
								}}
							/>

							<Controller
							control={control}
							name="photo"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField onChange={onChange} value={value} error={error} placeholder='Photo' folder='actors'/>
							)}
							rules={{required: 'Photo is required'}}
						/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default ActorEdit
