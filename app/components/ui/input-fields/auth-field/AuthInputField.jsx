import { FC } from 'react'
import {
	FormState,
	UseFormRegister,
} from 'react-hook-form'

import { validEmail } from '@/shared/regex/auth-field.regex'

import InputField from '../InputField'

// interface IAuthInputField {
// 	register: UseFormRegister<any>
// 	formState: FormState<any>
// 	isPasswordRequired?: boolean
// }

// TODO: implement rigth TS for InputField

// error={errors.message} TODO: error={errors.email}
const AuthInputField = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<InputField
				placeholder="E-mail"
				error={errors.email}
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
			/>
			<InputField
				placeholder="Password"
                type='password'
				error={errors.password}
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Minimum length should be more then 6 symbols',
								},
						  }
						: {}
				)}
			/>
		</>
	)
}

export default AuthInputField
