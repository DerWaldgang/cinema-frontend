import { getUsersUrl } from '@/config/api.config'
import axios from 'api/interceptors'

export const AdminService = {
    async getCountUsersForAdmin(){
        return axios.get<number>(getUsersUrl('/count'))
    }
}