import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'

import '../styles/globals.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
