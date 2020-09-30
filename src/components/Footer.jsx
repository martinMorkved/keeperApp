import React from 'react';



const copyright = "copyright © "


const currentYear = new Date().getFullYear();

function Footer() {
return <footer>
            <p>
                {copyright}
                {currentYear}
            </p>
        </footer>;
}

export default Footer;