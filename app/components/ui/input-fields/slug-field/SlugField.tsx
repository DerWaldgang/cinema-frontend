import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import InputField from '../InputField'

import styles from './SlugField.module.scss'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<ISlugField> = ({ error, register, generate }) => {
	return (
		<div className="relative">
			<InputField
				{...register('slug', {
					required: 'Slug is required',
				})}
				placeholder="Generate a slug"
				error={error}
			/>

            <div className={styles.badge} onClick={generate}>
                generate
            </div>
		</div>
	)
}

export default SlugField
