import Profile from '@/components/screens/profile/Profile'
import { NextPageAuth } from '@/shared/types/auth.types'


const UserProfilePage: NextPageAuth = () => {

    return <Profile />
}

UserProfilePage.isOnlyUser = true

export default UserProfilePage