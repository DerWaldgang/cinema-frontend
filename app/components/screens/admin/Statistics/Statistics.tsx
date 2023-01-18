import { FC } from 'react'

import CountUsers from './CountUsers'
import MostPopularMovie from './MostPopularMovie'

import styles from '../Admin.module.scss'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<MostPopularMovie />
		</div>
	)
}

export default Statistics
