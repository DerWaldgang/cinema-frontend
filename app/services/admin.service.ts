import { getUsersUrl } from '@/config/api.config'
import axios from '@/utils/api/interceptors'

export const AdminService = {
    async getCountUsersForAdmin(){
        return axios.get<number>(getUsersUrl('/count'))
    }
}