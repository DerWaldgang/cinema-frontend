import { FC } from 'react'

import { getMovieSlugUrl } from '@/config/url.config'

import styles from './AuthPlaceholder.module.scss'
import Link from 'next/link'

const AuthVideoButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link
			href={`/auth?redirect=${getMovieSlugUrl(slug)}`}
			className={styles.btn}
		>
			Sign In
		</Link>
	)
}

export default AuthVideoButton
