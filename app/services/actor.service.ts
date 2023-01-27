import { IActor } from '@/shared/types/movies.types'

import axios, { axiosClassic } from '@/utils/api/interceptors'

import { getActorsUrl } from '@/config/api.config'
import { IActorEditInput } from '@/components/screens/admin/actors/ActorEdit/actor-edit.interface'

export const ActorService = {
	async getActorBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},

	async createActor() {
		return axios.post<string>(getActorsUrl(''))
	},

	async updateActor(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},

	async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},

	async getBySlugActor(slug:string){
		return axiosClassic.get<IActor>(getActorsUrl(`by-slug/${slug}`))
	},

	async getAllActors(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getByIdActor(_id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
}
