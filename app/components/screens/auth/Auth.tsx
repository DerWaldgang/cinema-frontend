import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/buttons/Button'
import Heading from '@/components/ui/heading/Heading'
import AuthInputField from '@/components/ui/input-fields/auth-field/AuthInputField'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import { IAuthInput } from './auth.interface'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [authType, setAuthType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		reset,
		formState,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (authType === 'login') login(data)
		else if (authType === 'register') register(data)

		reset()
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Authorization" className="mb-6" />

					<AuthInputField
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setAuthType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setAuthType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
