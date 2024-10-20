import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Middle from './Components/Middle/Middle';
import Cart from './Components/Cart/Cart'; // Import Cart component
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]); // State to hold cart items
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control cart modal visibility

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // Update cart items
    setIsModalOpen(true); // Open the cart modal when an item is added
  };

  // Function to toggle cart modal visibility
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
 
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
};
  return (
    <>
      <Header />
      <Home />
      <Middle addToCart={addToCart} /> {/* Pass addToCart function to Middle */}
      <Footer />
      <Cart isOpen={isModalOpen} onClose={toggleModal} items={cartItems} onRemove={handleRemoveItem} />

    </>
  );
}

export default App;
