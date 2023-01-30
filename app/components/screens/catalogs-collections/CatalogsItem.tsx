import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { getGenreSlugUrl } from '@/config/url.config'

import styles from './Catalogs.module.scss'
import CatalogsImage from './CatalogsImage'
import { ICatalog } from './catalogs.interface'

const CatalogsItem: FC<{ collection: ICatalog }> = ({ collection }) => {
	return (
		<Link href={getGenreSlugUrl(collection.slug)} className={styles.collection}>
			<CatalogsImage collection={collection} />

			<div className={styles.content}>
				<div className={styles.title}>{collection.title}</div>
			</div>

			<div className={cn(styles.behind, styles.second)}>
				<CatalogsImage collection={collection} />
			</div>

			<div className={cn(styles.behind, styles.third)}>
				<CatalogsImage collection={collection} />
			</div>
		</Link>
	)
}

export default CatalogsItem
