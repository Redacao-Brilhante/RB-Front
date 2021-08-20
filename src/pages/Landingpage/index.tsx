import React from 'react';
import { DiagonalBox } from '../../components/Landingpage/DiagonalBox';
import { FeaturesDetails } from '../../components/Landingpage/FeaturesDetails';
import { Home } from '../../components/Landingpage/Home';


export function Landingpage() {
    return (
        <>
            <Home />
            <DiagonalBox/>
            <FeaturesDetails/>
        </>
    )
}