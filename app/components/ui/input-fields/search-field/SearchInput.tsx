import { ChangeEvent, FC } from 'react';
import MaterialIcon from '../../icon/MaterialIcon';

import styles from './SearchInput.module.scss'

interface ISearchInput {
    searchTerm: string;
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput:FC <ISearchInput> = ({searchTerm, handleSearch}) => {
    return (
        <div className={styles.search}>
            <MaterialIcon name='MdSearch' />
            <input placeholder='Search...' value={searchTerm} onChange={handleSearch}/>
        </div>
    );
};

export default SearchInput;