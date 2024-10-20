import React from 'react';
import './Footer.css'; // Ensure you have this CSS file
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
            <FaLinkedin size={30} />
            <FaGithub size={30} />
        </div>
    );
};

const Footer = () => {
    return ( 
        <div className="footer-main">
            <div className="footer">
                <div className="container">
                    <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim</p>
                    <input type="text" placeholder="Enter your email address" />
                    <button>Subscribe</button>
                </div>
                <div className="container">
                    <h1>About us</h1>
                    <p>Our Story</p>
                    <p>Blogs</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                    <p>Help & Support</p>
                </div>
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Book Maali</p>
                    <p>Plant Day Care</p>
                    <p>Rent Plants</p>
                    <p>Plants & Pots</p>
                    <p>Gardening Tools</p>
                </div>
                <div className="container">
                    <h1>Useful Links</h1>
                    <p>My Account</p>
                    <p>Orders & Returns</p>
                    <p>Track Order</p>
                    <p>Terms & Conditions</p> 
                    <p>Privacy Policy</p>
                    <p>Return, Refund & Replacement Policy</p>
                </div>
                <div className="container">
                    <h1>GET IN TOUCH</h1>
                    <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
                    <p>Call: +919958287272</p>
                    <p>Email: care@chaperoneplants.com</p>
                </div>
            </div>
            <div className="footer-info">
                <h1 className="last-h1">CHAPERONE</h1>
                <p className="para">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                <h1 className="last-h1">Follow us on</h1>
                <SocialIcons />
            </div>
            <hr/>
            <p className="para">© 2023, chaperone.com All rights reserved.</p>
        </div>
    );
};

export default Footer;
