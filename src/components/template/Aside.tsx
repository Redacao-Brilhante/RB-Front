import React from 'react';

import '../../styles/components/template/Aside.scss';

type AsideProps = {
    children: React.ReactNode
}
export function Aside({ children }: AsideProps) {
    return (
        <>
            <aside className="aside-component">
                { children }
            </aside>
        </>
    )
}