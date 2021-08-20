import { disconnect } from 'process';
import React from 'react';
import { DetailCards } from '../../components/Landingpage/DetailCards';

import '../../styles/components/Landingpage/FeaturesDetails.scss';

export function FeaturesDetails() {
    return (
        <>
            <div id="details-content">
                <h3>Nossa Plataforma</h3>
            </div>
            <div id='cards'>
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
                <DetailCards
                    title="Material de Apoio"
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
                <DetailCards
                    title="Exemplos de Redação"
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
            </div>
        </>

    )
}