import React from 'react';
import GenreMenu from './Genres/GenreMenu';
import Menu from './Menu';
import { mainMenu, userMenu } from './menu.data';

const MenuContainer = () => {
    return (
        <>
            <Menu menu={mainMenu}/>
            <GenreMenu />
            <Menu menu={userMenu}/>
        </>
    );
};

export default MenuContainer;