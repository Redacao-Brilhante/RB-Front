import React from 'react';
import logoWithoutTitle from '../../assets/logo-without-title.svg'; 

import '../../styles/components/Landingpage/Header.scss';

export function Header() {
    return (
        <div id="header-component">
           <div id="logo-group">
                <div id="logo">
                    <img src={ logoWithoutTitle } alt="Logo" />
                </div>
                <h1>Redação brilhante</h1>
           </div>

            <div id="action-button">
                <h1>ddas</h1>
            </div>
        </div>
    )
}