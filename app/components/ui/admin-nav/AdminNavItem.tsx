import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './AdminNavigation.module.scss'
import { IAdminNavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ item: IAdminNavItem }> = ({
	item: { link, title },
}) => {
    
	const { asPath } = useRouter()

	return (
		<li>
			<Link
				href={link}
				className={cn({
					[styles.active]: asPath === link,
				})}
			>
				{title}
			</Link>
		</li>
	)
}

export default AdminNavItem
