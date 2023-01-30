import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import AdminNavigation from '@/components/ui/admin-ui/admin-nav/AdminNavigation'
import Button from '@/components/ui/buttons/Button'
import Heading from '@/components/ui/heading/Heading'
import InputField from '@/components/ui/input-fields/InputField'
import SlugField from '@/components/ui/input-fields/slug-field/SlugField'
import UploadField from '@/components/ui/input-fields/upload-field/UploadField'
import SkeletonLoading from '@/components/ui/skeleton/SkeletonLoading'

import styles from '@/ui/input-fields/AdminForms.module.scss'

import { useMovieEdit } from '@/hooks/admin/edit/useMovieEdit'
import { useActorLabelSelector } from '@/hooks/admin/selector/useActorLabelSelector'
import { useGenreLabelSelector } from '@/hooks/admin/selector/useGenreLabelSelector'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import { IMovieEditInput } from './movie-edit.interface'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})
	const { isLoading: isMovieLoading, onSubmit } = useMovieEdit(setValue)

	const { isLoading: isGenresLoading, data: genresLabel } =
		useGenreLabelSelector()
	const { isLoading: isActorsLoading, data: actorsLabel } =
		useActorLabelSelector()

	return (
		<Meta title="Edit movie">
			<AdminNavigation />
			<Heading title="Edit movie" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isMovieLoading ? (
					<SkeletonLoading count={2} className="h-36" />
				) : (
					<>
						<div className={styles.fields}>
							<InputField
								{...register('title', {
									required: 'Name is required',
								})}
								placeholder="Title"
								error={errors.title}
							/>
							<div>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('title')))
									}}
								/>
							</div>
							<InputField
								{...register('parameters.country', {
									required: 'Country is required',
								})}
								placeholder="Country"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>
							<InputField
								{...register('parameters.duration', {
									required: 'Duration is required',
								})}
								placeholder="Duration"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>
							<InputField
								{...register('parameters.year', {
									required: 'Year is required',
								})}
								placeholder="Year"
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>
							<Controller
								name="genres"
								control={control}
								rules={{
									required: 'Please select at least one genre!',
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										field={field}
										placeholder="Genres"
										options={genresLabel || []}
										isLoading={isGenresLoading}
										isMulti
									/>
								)}
							/>
							<Controller
								name="actors"
								control={control}
								rules={{
									required: 'Please select at least one actor!',
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										field={field}
										placeholder="Actors"
										options={actorsLabel || []}
										isLoading={isActorsLoading}
										isMulti
									/>
								)}
							/>
							<Controller
								control={control}
								name="poster"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										placeholder="Poster"
										folder="movies"
									/>
								)}
								rules={{ required: 'Poster is required' }}
							/>
							<Controller
								control={control}
								name="bigPoster"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										placeholder="Big poster"
										folder="movies"
									/>
								)}
								rules={{ required: 'Big poster is required' }}
							/>
							<Controller
								control={control}
								name="videoUrl"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										placeholder="Video"
										folder="movies"
										style={{ marginTop: -25 }}
										isNoImage
									/>
								)}
								rules={{ required: 'Vide is required' }}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
