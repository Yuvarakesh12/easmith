import React, { useState, useEffect } from 'react';
import './Cart.css';
import { HiArrowLongRight } from "react-icons/hi2";
import SuccessModal from './SuccessModal';

const Cart = ({ isOpen, onClose, items = [], onRemove }) => {
    const [cartItems, setCartItems] = useState(items);
    const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

    useEffect(() => {
        setCartItems(items);
    }, [items]);

    const handleCheckout = () => {
        onClose();
        setSuccessModalOpen(true);
    };

    const handleRemove = (itemId) => {
        const newItems = cartItems.map(item => {
            if (item.id === itemId) {
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        }).filter(item => item.quantity > 0);
        
        setCartItems(newItems);
        onRemove(itemId);
    };

    useEffect(() => {
        if (isSuccessModalOpen) {
            const timer = setTimeout(() => {
                setSuccessModalOpen(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isSuccessModalOpen]);

    return (
        <>
            <div className={`cart-modal-overlay ${isOpen ? 'cart-show' : ''}`} onClick={onClose}>
                <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="cart-close-button" onClick={onClose}>X</button>
                    <p className="main-head">Your Cart</p>
                    <div className="cart-containers">
                        <p>Bag</p>
                        <HiArrowLongRight />
                        <p>Address</p>
                        <HiArrowLongRight />
                        <p>Payment</p>
                    </div>
                    <hr />

                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-content">
                                    <div className="cart-left-container">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="round-image" 
                                        />
                                    </div>
                                    <div className="cart-right-container">
                                        <h3 className="cart-item-title">{item.name}</h3>
                                        <p className="cart-item-size">Size: Small</p>
                                        <span className="cart-item-stars">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </span>
                                        <p className="cart-item-price">${item.newPrice}</p>
                                        <p className="cart-item-delivery">Delivery by <span>Tue, Oct 5</span> | Free Delivery</p>
                                        
                                        <div className="flex-container">
                                            <div className="left-box">
                                                <button className="button-gray">Qty {item.quantity}</button>
                                            </div>
                                            <div className="right-box">
                                                <button className="button-gray" onClick={() => handleRemove(item.id)}>Remove</button>
                                                <button className="button-gray">Save For Later</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            <hr/>
                            <div>
                                <h1>Price details</h1>
                                <p>Price: Rs : 299.00</p>  {/* Dummy price */}
                                <p>Discount: Rs : -20.00</p>  {/* Dummy discount */}
                                <p>Delivery charges: Rs : 100.00</p>  {/* Dummy delivery charges */}
                            </div>
                            <hr/>
                            <div>
                                <p>Total Amount: Rs 279.00</p>  {/* Dummy total amount */}
                            </div>
                            <hr/>
                            <div className="ckeck">
                                <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Success Modal */}
            <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setSuccessModalOpen(false)} />
        </>
    );
};

export default Cart;
