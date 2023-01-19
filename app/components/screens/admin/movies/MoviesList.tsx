import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-ui/admin-nav/AdminNavigation'
import AdminHeader from '@/components/ui/admin-ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-ui/admin-table/AdminTable/AdminTable'
import Heading from '@/components/ui/heading/Heading'

import { useMovies } from '@/hooks/admin/useMovies'

import Meta from '@/utils/meta/Meta'

const MovieList: FC = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useMovies()

	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />
			<AdminHeader
				onClick={createAsync}
				handleSearch={handleSearch}
				searchTerm={searchTerm}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Title', 'Genres', 'Rating']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default MovieList
