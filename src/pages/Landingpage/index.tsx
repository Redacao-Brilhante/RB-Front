import React from 'react';
import { Home } from '../../components/Landingpage/Home';
import { DiagonalBox } from '../../components/Landingpage/DiagonalBox';
import { DetailCards } from '../../components/Landingpage/DetailCards';

export function Landingpage() {
    return (
        <>
            <Home />
            <DiagonalBox />
            <DetailCards
                title="Videoaulas"
                paragraph="
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Neque gravida in fermentum et. 
                    Lobortis mattis aliquam faucibus purus in. 
                    Aliquam nulla facilisi cras fermentum. 
                    Mauris augue neque gravida in. "
            />
        </>
    )
}