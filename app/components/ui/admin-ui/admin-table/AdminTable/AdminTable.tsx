import { FC } from 'react'

import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { IAdminTable } from './admin-table.interface'

import SkeletonLoading from '../../../skeleton/SkeletonLoading'

const AdminTable: FC<IAdminTable> = ({
	isLoading,
	headerItems,
	tableItems,
	removeHandler,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoading count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((item) => (
					<AdminTableItem
						key={item._id}
						removeHandler={() => removeHandler(item._id)}
						tableItem={item}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found!</div>
			)}
		</div>
	)
}

export default AdminTable
