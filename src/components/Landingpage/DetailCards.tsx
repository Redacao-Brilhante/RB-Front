import React from "react";

import '../../styles/components/Landingpage/DetailCards.scss'

type Card = {
    title: string,
    paragraph: string,
}

export function DetailCards({title, paragraph}: Card) {
    return (
        
        <div id='card'>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    )
}