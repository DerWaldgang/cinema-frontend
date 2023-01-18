import { getAdminHomeUrl, getAdminUrl } from '@/config/url.config'

import { IAdminNavItem } from './admin-navigation.interface'

export const adminNavItems: IAdminNavItem[] = [
	{ title: 'Statistics', link: getAdminHomeUrl() },
	{ title: 'Users', link: getAdminUrl('users') },
	{ title: 'Movies', link: getAdminUrl('movies') },
	{ title: 'Actors', link: getAdminUrl('actors') },
	{ title: 'Genres', link: getAdminUrl('genres') },
]
