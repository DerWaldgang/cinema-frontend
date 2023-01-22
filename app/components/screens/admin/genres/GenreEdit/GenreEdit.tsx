import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/components/ui/admin-ui/admin-nav/AdminNavigation'
import Button from '@/components/ui/buttons/Button'
import Heading from '@/components/ui/heading/Heading'
import InputField from '@/components/ui/input-fields/InputField'


const DynamicFieldTextEditor= dynamic(
	() => import('@/components/ui/input-fields/editor-field/FieldTextEditor'),
	{
		ssr: false,
	}
)
import SlugField from '@/components/ui/input-fields/slug-field/SlugField'
import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import styles from '@/ui/input-fields/AdminForms.module.scss'

import { useGenreEdit } from '@/hooks/admin/edit/useGenreEdit'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import { IGenreEditInput } from './genre-edit.interface'
import dynamic from 'next/dynamic'

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useGenreEdit(setValue)

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoading count={2} className='h-36'/>
				) : (
					<>
						<div className={styles.fields}>
							<InputField
								{...register('name', {
									required: 'Name is required',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')))
									}}
								/>
							</div>

							<InputField
								{...register('icon', {
									required: 'Icon is required',
								})}
								placeholder="Icon"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
                            						</div>
							<Controller
								control={control}
								name="description"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<DynamicFieldTextEditor
										onChange={onChange}
										error={error}
										value={value}
										placeholder="Description"
									/>
								)}
								rules={{
									validate: {
										required: (value) =>
											(value && stripHtml(value).result.length > 0) ||
											'Description is required',
									},
								}}
							/>

							<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default GenreEdit
