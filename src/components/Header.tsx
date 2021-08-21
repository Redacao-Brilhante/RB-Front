import React from 'react';

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