import React from 'react';

import { FaEnvelope, FaPhone, FaWhatsapp, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

import '../module.css/layout.module.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Contact Us</h2>
                <a href="mailto:mail@mail.com"><FaEnvelope style={{ color: 'white' }} /></a>
                <a href="tel:+12345678910"><FaPhone style={{ margin: '0.5rem 0' }} /></a>
                <a href="tel:+12345678910"><FaWhatsapp style={{ color: 'lightGreen' }} /></a>
            </div>

            <div>
                <h2>Our Locations</h2>
                <p>- Rechtestraat 50A
                    <br />5611 GR, Eindhoven
                </p>
                <p>- Rechtestraat 50A
                    <br />5611 GR, Eindhoven
                </p>
                <p>- Rechtestraat 50A
                    <br />5611 GR, Eindhoven
                </p>
            </div>

            <div>
                <h2>Follow Us</h2>
                <a href="facebook"><FaFacebookF style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '0.1em' }} /></a>
                <a href="twitter"><FaYoutube style={{ color: 'red', borderRadius: '0.5rem', margin: '0.5rem 0' }} /></a>
                <a href="twitter"><FaXTwitter style={{ color: 'white' }} /></a>
            </div>
        </footer>
    );
}

export default Footer;