import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ variant, item }) => {
	return (
		<Link
			href={item.link}
			className={cn(styles.item, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<Image
				alt={item.name}
				draggable={false}
				priority
				src={item.posterPath}
				width={90}
				height={90}
			/>
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					{item.content.subTitle && (
						<div className={styles.subTitle}>{item.content.subTitle}</div>
					)}
				</div>
			)}
		</Link>
	)
}

export default GalleryItem
