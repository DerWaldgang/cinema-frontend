import { FC } from 'react'

import Search from './Search/Search'
import styles from './Sidebar.module.scss'
import MoviesContainer from './SidebarMovies/MoviesContainer'


const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
