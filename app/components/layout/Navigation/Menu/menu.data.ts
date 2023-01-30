import { IMenu } from './menu.interface'

export const mainMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
        {
			icon: 'MdExplore',
			link: '/genres',
			title: 'Catalogs',
		},
        {
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies',
		},
        {
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now',
		},

	],
}


export const userMenu: IMenu = {
    title: 'General', 
    items: []
}


export const menus: IMenu[] = [mainMenu, userMenu]