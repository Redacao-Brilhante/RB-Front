import React from 'react';

import '../../styles/components/template/Main.scss';

type MainProps = {
    children: React.ReactNode
}
export function Main({ children }: MainProps) {
    return (
        <div className="main-component">
            { children }
        </div>
    )
}