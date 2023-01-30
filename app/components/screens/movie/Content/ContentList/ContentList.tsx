import Link from 'next/link'
import React, { FC } from 'react'

import styles from './ContentList.module.scss'

import { IContentList } from '../content.interface'

const ContentList: FC<IContentList> = ({ links, name }) => {
	return (
		<div className={styles.list}>

			<div className={styles.name}>{name}</div>

			<div className={styles.links}>
				{links.map((link, index) => (
					<React.Fragment key={link._id}>
						<Link href={link.link}>{link.title}</Link>
						{index + 1 !== links.length ? ', ' : ''}
					</React.Fragment>
				))}
			</div>

		</div>
	)
}

export default ContentList
