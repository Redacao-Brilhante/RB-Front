import React, { useState } from 'react';

import arrowDown2 from '../assets/arrow-down2.svg';
import '../styles/components/DropDownLinks.scss';
    
type DropDownProps = {
    srcImg: string,
    title: string,
    children?: React.ReactNode
}
export function DropDownLinks(props: DropDownProps) {
    //estado que verificará se o conteúdo do dropdown está aberto ou não.
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        //atualiza o valor do estado para adicionar uma classe e aplicar estilo no css.
        setIsOpen(!isOpen)
    }

    return (
        <div className="content">
            <div className="dropdown-links-component">
                <span>
                    <img src={ props.srcImg } alt="Imagem" />
                    <p>{ props.title }</p>
                </span>
                
                { 
                    isOpen ?
                        <button className={"btn-arrow-down is-open"} onClick={ handleClick }>
                            <img src={ arrowDown2 } alt="" />
                        </button>
                    : 
                        <button className={"btn-arrow-down"} onClick={ handleClick }>
                            <img src={ arrowDown2 } alt="" />
                        </button>
                } 
            </div>

            {
                isOpen ? 
                    <div className="links">{ props.children }</div>
                :
                    <></>
            }
        </div>
    )
}