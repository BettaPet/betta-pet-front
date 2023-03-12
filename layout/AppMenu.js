import React from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {

    const model = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Perfil',
            items: [{ label: 'Perfil', icon: 'pi pi-fw pi-user', to: '/uikit/formlayout' }]
        },
        {
            label: 'Pets',
            items: [{ label: 'Pets', icon: 'pi pi-fw pi-heart-fill', to: '/uikit/table' }]
        },
        {
            label: 'Serviços',
            items: [{ label: 'Serviços', icon: 'pi pi-fw pi-th-large', to: '/uikit/list' }]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
