import Image from 'next/image'
import { FC } from 'react'

import styles from './Banner.module.scss'
import { IBanner } from './banner.interface'

const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				src={image}
				draggable={false}
				className={styles.image}
				unoptimized
				priority
				alt="Image of Movie"
				width={100}
				height={50}
			/>

			{Detail && <Detail />}
		</div>
	)
}

export default Banner
