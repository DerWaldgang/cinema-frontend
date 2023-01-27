import { IProfileField } from '@/components/screens/profile/profile.interface'

import { IUser } from '@/shared/types/user.types'

import axios from '@/utils/api/interceptors'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	async getAllUsers(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getProfile() {
		return axios.get<IUser>(getUsersUrl('profile'))
	},

	async updateProfile(data: IProfileField) {
		return axios.put<string>(getUsersUrl('profile'), data)
	},

	async getByIdUser(_id?: string) {
		return axios.get<IUser>(getUsersUrl(`${_id}`))
	},
	async updateUser(_id: string, data: IProfileField) {
		console.log(data)
		return axios.put<string>(getUsersUrl(`${_id}`), data)
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
}
