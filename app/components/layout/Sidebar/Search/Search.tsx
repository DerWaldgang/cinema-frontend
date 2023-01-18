import React from 'react'

import { useSearch } from '@/hooks/useSearch'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import SearchInput from '@/components/ui/input-fields/search-field/SearchInput'

const Search = () => {

	const { data, isSuccess, handleSearch, searchTerm } = useSearch()

	return <div className={styles.wrapper}>
        {isSuccess && <SearchList movies={data || []}/>}
        <SearchInput searchTerm={searchTerm} handleSearch={handleSearch}/>
    </div>
}

export default Search
