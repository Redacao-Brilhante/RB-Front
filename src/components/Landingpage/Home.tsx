import React from 'react';
import logoWithoutTitle from '../../assets/logo-without-title.svg';
import youngDesk from '../../assets/young_studying_desk.svg';

import '../../styles/components/Landingpage/Home.scss';

export function Home() {
    return (
        <div id="home-component">
            
            <div id="header">
                <div id="logo-group">
                    <div id="logo">
                        <img src={ logoWithoutTitle } alt="Logo" />
                    </div>
                    <h5>Redação brilhante</h5>
            </div>
                <div id="action-button">
                    <button>
                        Acessar
                    </button>
                </div>
            </div>

            <div id="content">
                <div id="intro">
                    <h3>Redacao Brilhante</h3>
                    <h5>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua.
                    </h5>
                </div>
                <div id="illustration">
                    <img src={ youngDesk } alt="Estudnate" />
                </div>
            </div>

           
        </div>
    )
}