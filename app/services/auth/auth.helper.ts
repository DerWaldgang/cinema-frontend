import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const saveTokenToCookies = (data: ITokens) => {
	Cookies.set('access', data.accessToken)
	Cookies.set('fresh', data.refreshToken)
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenToCookies(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokenFromCookies = () => {
	Cookies.remove('access')
	Cookies.remove('fresh')
}
