import { ChangeEvent, FC } from 'react'
import SearchInput from '@/ui/input-fields/search-field/SearchInput'


import styles from './AdminHeader.module.scss' 
import AdminCreateButton from './AdminCreateButton'

interface IAdminHeader {
    onClick?: () => void
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({onClick, handleSearch, searchTerm}) => {

    return <div className={styles.header}>
        <SearchInput searchTerm={searchTerm} handleSearch={handleSearch}/>
        {onClick && <AdminCreateButton onClick={onClick} />}
    </div>
}

export default AdminHeader