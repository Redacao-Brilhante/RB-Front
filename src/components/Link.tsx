import React from 'react';

import '../styles/components/Link.scss';

type LinkProps = {
    url: string,
    title: string
}
export function Link(props: LinkProps) {
    return (
        //Ao chamar o componente, é preciso passar as propriedades url e title  
        <a href={ props.url } target="_blank" rel="noreferrer">{ props.title }</a>
    )
}
