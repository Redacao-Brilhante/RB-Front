import React from 'react';
import { Notification } from './Notification';
import { User } from './User';
import logoWithoutTitle from '../assets/logo-without-title.svg';

import '../styles/components/Header.scss';

export function Header() {
    return (
        <div className="header-component">
           <div className="logo-group">
                <div className="logo">
                    <img src={ logoWithoutTitle } alt="Logo" />
                </div>
                <h1>Redação brilhante</h1>
           </div>
            <div className="user-group">
                <Notification />
                <User />
            </div>
        </div>
    )
}
