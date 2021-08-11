import React from 'react';
import arrowDown from '../assets/arrow-down.svg';
import userPhoto from '../assets/user-photo.svg';

import '../styles/components/User.scss';

export function User() {
    return (
        <div className="user-component">
            <img className="user-photo" src={ userPhoto } alt="Foto do usuário" />
            
            <div className="user-informations">
                <h4 className="username">Usuário não logado</h4>
                <p className="occupation">Estudante</p>
            </div>

            <div className="arrow-down">
                <img src={ arrowDown } alt="Icone seta para baixo" />
            </div>
        </div>
    )
}