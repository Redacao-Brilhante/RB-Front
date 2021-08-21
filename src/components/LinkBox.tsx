import React from 'react';
import { Link } from './Link';

import '../styles/components/LinkBox.scss';

type LinkObjects = {
    title: string,
    url: string
}

type LinkBoxProps = {
    links: Array<LinkObjects>
}
export function LinkBox({ links }: LinkBoxProps) {
    return (
        <div className="link-box-component">
            { links.map(link => <Link title={link.title} url={link.url} key={link.title} />) }
        </div>
    )
}