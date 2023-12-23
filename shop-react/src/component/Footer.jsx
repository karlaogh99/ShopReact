import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', width: '100%', height:'50%', marginTop:"60px" }}>
                <p >
                    <a href="https://github.com/karlaogh99" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '5px' }}>
                        <FaGithub size={50} style={{ color: 'white' }} />  Visita mi perfil en GitHub:
                        @karlaogh99
                    </a>
                </p>
            </footer>
        </div>

    );
};

export default Footer;