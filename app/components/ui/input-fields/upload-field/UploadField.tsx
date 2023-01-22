import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import { useUploads } from '@/hooks/admin/useUploads'

import SkeletonLoading from '../../skeleton/SkeletonLoading'
import styles from '../InputField.module.scss'
import { IUploadField } from '../input-field.interface'

const UploadField: FC<IUploadField> = ({
	folder,
	value,
	onChange,
	placeholder,
	error,
	style,
	isNoImage = false,
}) => {
	const { isLoading, uploadFile } = useUploads(onChange, folder)

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>

				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoading count={1} className="w-full h-full" />
						) : (
						    value && <Image alt="" width={100} height={100} src={value} unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
