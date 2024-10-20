import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa"; 
import './Middle.css';

const Items = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729313850/e1ce63ff429a0c018fd6e2e5dd614458_czmend.png",
        name: "Monsterra",
        description: "Indoor Plant, Low maintenance",
        rating: "4.9",
        oldPrice: "₹ 359",
        newPrice: "₹ 299",
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729318538/daa994fdb511faa82ea79a5ef58fbb1a_hnc68y.png",
        name: "Fiddle Leaf Fig",
        description: "Stylish Indoor Plant",
        rating: "4.8",
        oldPrice: "₹ 499",
        newPrice: "₹ 299",
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729318550/7973d62829a030074ad8b6ad34_1_aswm5w.png",
        name: "Snake Plant",
        description: "Air Purifying Plant",
        rating: "4.7",
        oldPrice: "₹ 199",
        newPrice: "₹ 299",
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729313850/e1ce63ff429a0c018fd6e2e5dd614458_czmend.png",
        name: "Pothos",
        description: "Easy to Care Plant",
        rating: "4.6",
        oldPrice: "₹ 249",
        newPrice: "₹ 299",
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729318538/daa994fdb511faa82ea79a5ef58fbb1a_hnc68y.png",
        name: "Peace Lily",
        description: "Beautiful Flowering Plant",
        rating: "4.5",
        oldPrice: "₹ 399",
        newPrice: "₹ 299",
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729318550/7973d62829a030074ad8b6ad34_1_aswm5w.png",
        name: "ZZ Plant",
        description: "Low Light Tolerant",
        rating: "4.4",
        oldPrice: "₹ 399",
        newPrice: "₹ 299",
    },
    {
        id: 7,
        image: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729313850/e1ce63ff429a0c018fd6e2e5dd614458_czmend.png",
        name: "Pothos",
        description: "Easy to Care Plant",
        rating: "4.6",
        oldPrice: "₹ 359",
        newPrice: "₹ 299",
    },
    {
        id: 8,
        image: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729318538/daa994fdb511faa82ea79a5ef58fbb1a_hnc68y.png",
        name: "Peace Lily",
        description: "Beautiful Flowering Plant",
        rating: "4.5",
        oldPrice: "₹ 399",
        newPrice: "₹ 299",
    },
    {
        id: 9,
        image: "https://res.cloudinary.com/dfh97e9e4/image/upload/v1729318550/7973d62829a030074ad8b6ad34_1_aswm5w.png",
        name: "ZZ Plant",
        description: "Low Light Tolerant",
        rating: "4.4",
        oldPrice: "₹ 399",
        newPrice: "₹ 299",
    },
];

const Middle = ({ addToCart }) => {
    const [isLoved, setIsLoved] = useState(false); // Manage love state

    const filters = [
        "Type of Plants",
        "Price",
        "Nursery",
        "Ideal Plants Location",
        "Indoor/Outdoor",
        "Maintenance",
        "Plant Size",
        "Water Schedule",
        "Color",
        "Seasonal",
        "Light Efficient",
    ];

    const sortOptions = [
        "SORT BY",
        "Popularity",
        "Price High-Low",
        "Price Low-High",
    ];

    const toggleLove = () => {
        setIsLoved(!isLoved);
    };
   
    return (
        <div className="main-container">
            <div className="left-container">
                <div className="clear-container">
                    <h2>Filter</h2>
                    <p className="clearall">Clear All</p>
                </div>
                {filters.map((filter, index) => (
                    <div key={index}>
                        <div className="filter-item">
                            <span>{filter}</span>
                            <span className="add-icon"> + </span>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
            <div className="right-container">
                <div className="product-info">
                    <p>{Items.length} Products</p>
                    <select id="sort-by" className="sort-dropdown">
                        {sortOptions.map((option, index) => (
                            <option className="options" key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    {Items.map(item => (
                        <div key={item.id}>
                            <div className="image-container">
                                <img src={item.image} alt={item.name} className="card-image" />
                                <button className="attached-button">View Product</button>
                                <button className="love-button" onClick={toggleLove} style={{ color: isLoved ? 'gold' : 'black' }}>
                                    <FaRegHeart />
                                </button>
                            </div>
                            <div className="image-below">
                                <p>{item.name}</p>
                                <p className="itop">{item.description}</p>
                                <div className="rating-container">
                                    <img src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729329929/image_10_mau7st.png" className="image-rating" />
                                    <p className="rating">{item.rating}</p>
                                </div>
                                <div className="price-container">
                                    <p className="price-old">{item.oldPrice}</p>
                                    <p className="price-new">{item.newPrice}</p>
                                </div>
                                <div>
                                    <button className="button add-to-cart-button" onClick={() => addToCart(item)}>- Add to Cart +</button>
                                    <button className="button buy-on-rent-button">Buy on Rent</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button className="view-more-button">View More</button>
                </div>
            </div>
        </div>
    );
}

export default Middle;
