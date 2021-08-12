import React from "react";
import '../../styles/components/Landingpage/About.scss'

import HomeScreen from '../../assets/HOME-SCREEN.png'

export function About(){
    return (
        <div id="diagonal-box">
            <div id="img-examples">
                <img src={HomeScreen} alt="HomeScreen" />
            </div>
            

            <div id="content">
                <h3>Nossa Plataforma</h3>
                <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. 
                    Morbi tristique senectus et netus. Morbi tristique senectus et netus et malesuada. 
                </h6>
                <h6>
                    Accumsan in nisl nisi scelerisque eu ultrices vitae. Enim facilisis gravida 
                    neque convallis a cras semper auctor neque. Est lorem ipsum dolor sit amet 
                    consectetur adipiscing elit pellentesque. In massa tempor nec feugiat nisl
                    pretium fusce. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. 
                    Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. 
                    Nunc sed id semper risus in hendrerit. 
                </h6>
            </div>

        </div>
    );
}