import React from "react";
import { ButtonAcess } from "./ButtonAcess";
import imageContent01 from '../assets/image-content-01.svg';
import imageContent02 from '../assets/image-content-02.svg';
import imageContent03 from '../assets/image-content-03.svg';

import '../styles/components/MiddleContent.scss';

export function MiddleContent() {
  return (
    <div className="content-component">
      <div className="text-group">
        <h1>Acesso Rápido</h1>
        <h3>Selecione abaixo o serviço que deseja acessar</h3>
      </div>
      <div className="acess-group">
        <div className="attend-classes">
          <img src={imageContent01} className="imageContent01"/>
          <h1>Assistir as <b>videoaulas</b></h1>
          <a href="#"><ButtonAcess/></a>
        </div>
        <div className="acess-group-down">
          <div className="support-material">
            <div>
              <h1>Material de <b>Apoio</b></h1>
              <a href="#"><ButtonAcess/></a>
            </div>
              <img src={imageContent02} className="imageContentDown"/>
          </div>
          <div className="writing-examples">
            <div>
              <h1>Exemplos de <b>redação</b></h1>
              <a href="#"><ButtonAcess/></a>
            </div>
            <img src={imageContent03} className="imageContentDown"/>
          </div>
        </div>
      </div>
    </div>
  )
}
