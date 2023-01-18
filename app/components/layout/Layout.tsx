import { FC } from 'react'

import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import styles from './layout.module.scss'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
