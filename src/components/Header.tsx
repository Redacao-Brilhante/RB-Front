import React from 'react';
import { Notification } from './Notification';
import { User } from './User';
import logoWithoutTitle from '../assets/logo-without-title.svg';

import '../styles/components/Header.scss';

type HeaderProps = {
    srcLogo?: string
    children: React.ReactNode
}
export function Header({ srcLogo, children }: HeaderProps) {
    return (
        <div className="header-component">
           <div className="logo-group">
                <div className="logo">
                    <img src={ srcLogo } alt="Logo" />
                </div>
                <h1>Redação brilhante</h1>
           </div>
            { children }
        </div>
    )
}
