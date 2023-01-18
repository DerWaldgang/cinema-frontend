import MaterialIcon from '@/components/ui/icon/MaterialIcon';
import { useActions } from '@/hooks/useActions';
import React, { MouseEvent } from 'react';

const LogoutButton = () => {

    const {logout} = useActions()

    const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        logout()
    }
    return (
        <li>
            <a onClick={handleLogout}>
                <MaterialIcon name='MdLogout'/>
                <span>Logout</span>
            </a>
        </li>
    );
};

export default LogoutButton;