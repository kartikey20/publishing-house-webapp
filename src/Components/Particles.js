import React from 'react';
import ReactDOM from 'react-dom';
import { Particles } from '@blackbox-vision/react-particles';

const ParticlesJs = () => (
    <Particles
        id="simple"
        width="auto"
        height="100vh"
        style={{
            backgroundColor: 'blue',
        }}
        params={{
            particles: {
                number: {
                    value: 50,
                },
                size: {
                    value: 3,
                },
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
            },
        }}
    />
);

export default ParticlesJs
