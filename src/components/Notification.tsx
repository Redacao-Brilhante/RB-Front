import React from 'react';
import bellNotification from '../assets/bell-notification.svg';

import '../styles/components/Notification.scss';

export function Notification() {
    return(
        <>
            <a href="#">
                <img src={ bellNotification } alt="Sininho de notificações" />
            </a>
        </>
    )
}