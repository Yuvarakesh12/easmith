import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Header.css';
import { MdPerson, MdShoppingCart } from 'react-icons/md';
import Cart from '../Cart/Cart';

const Dropdown = ({ title, items, isOpen, toggle }) => (
    <div className="dropdown-container">
        <div
            className="tools"
            onClick={toggle}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onKeyDown={toggle}
        >
            <p>{title}</p>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isOpen && (
            <div className="dropdown">
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        )}
    </div>
);

const Header = () => {
    const [toolsOpen, setToolsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleToolsDropdown = () => {
        setToolsOpen((prev) => !prev);
    };

    const toggleServicesDropdown = () => {
        setServicesOpen((prev) => !prev);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <span className="shipping-text">Free Shipping on orders above 999/-</span>
                    <span className="contact">Call us on: +91 9264827482</span>
                </div>
            </header>
            <nav className="navbar">
                <div className="logo">
                    <img
                        src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729263214/image_55_nph728.png"
                        alt="Chaperone Logo"
                        className="logo-image"
                    />
                    <h1 className="chaperone-text">Chaperone</h1>
                </div>
                <div className="nav-items">
                    <p>Home</p>
                    <Dropdown
                        title="Tools"
                        items={[
                            'Gardening Tools',
                            'Pest Control',
                            'Fertilizers',
                            'Watering Cans',
                            'Garden Accessories',
                        ]}
                        isOpen={toolsOpen}
                        toggle={toggleToolsDropdown}
                    />
                    <Dropdown
                        title="Our Services"
                        items={['Book a Maali', 'Plant Day Care', 'Rent Plants']}
                        isOpen={servicesOpen}
                        toggle={toggleServicesDropdown}
                    />
                    <p>Blog</p>
                    <p>Our Story</p>
                    <p>FAQs</p>
                </div>
                <div className="profile-cart">
                    <h1 className="profile-icon"><MdPerson /></h1>
                    <h1 className="cart-icon" onClick={toggleModal}><MdShoppingCart /></h1>
                </div>
            </nav>
            <div className="search-container">
                <div className="search-wrapper">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <Cart isOpen={isModalOpen} onClose={toggleModal}>
                <div>
                    <p>Your</p>
                </div>
            </Cart>
        </>
    );
};

export default Header;
