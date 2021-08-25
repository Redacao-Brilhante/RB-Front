import React from "react";

import arrowCircleRifht from '../assets/arrow-circle-right.svg';

import '../styles/components/ButtonAcess.scss';

export function ButtonAcess(){
  return (
    <>
      <button type="button">Acessar<img src={ arrowCircleRifht } alt="Sininho de notificações" /></button>
    </>
  )
}
