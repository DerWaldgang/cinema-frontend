import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicFavorites = dynamic(() => import('@/components/screens/favorites/Favorites'))

const FavoritesPage: NextPage = () => {
	return <DynamicFavorites />
}

export default FavoritesPage
