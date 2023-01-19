import { FC } from 'react'

import AdminHeader from '@/components/ui/admin-ui/admin-table/AdminHeader/AdminHeader'
import AdminNavigation from '@/components/ui/admin-ui/admin-nav/AdminNavigation'
import AdminTable from '@/components/ui/admin-ui/admin-table/AdminTable/AdminTable'
import Heading from '@/components/ui/heading/Heading'

import { useUsers } from '@/hooks/admin/useUsers'

import Meta from '@/utils/meta/Meta'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Email', 'Data register']} tableItems={data || []}/>
		</Meta>
	)
}

export default UserList
