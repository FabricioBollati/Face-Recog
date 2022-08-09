import react from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import { ReactParallaxTiltProps } from "react-parallax-tilt";
import Scan from './scan.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt parallax-effect-glare-scale br2 shadow-2"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.2} 
            style={{  height:'150px', width:'150px' }}>
                <div className="pa3">
                    <img src={ Scan } />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo