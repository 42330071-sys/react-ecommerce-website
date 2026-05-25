import React, { useState, useEffect } from "react";
import "./Accessories.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Monitors XPS 15",
    description: "Powerful performance for professionals",
    image: "/sayan-majhi-9091iC9AW38-unsplash.jpg",
  },
  {
    title: "HeadPhones Pro 16",
    description: "Unleash your creativity",
    image: "/masood-aslami-O28lxHLRiyA-unsplash.jpg",
  },
  {
    title: "Asus ROG",
    description: "Gaming laptops at its best",
    image: "/haseeb-modi-NK42Sudesys-unsplash.jpg",
  },
];

const accessories= [
  { id:13, name: "Gaming Keyboard", price: 49.99, image: "/gaming keyboard.png" },
  { id:14, name: "Mouse Gaming", price: 14.99, image: "/gaming mouse.png" },
  { id:15, name: "PC Gaming", price: 1399.99, image: "/png.webp" },
  { id:16, name: "PS4 Controller", price: 59.99, image: "/png2.webp" },
  { id:17, name: "Gaming Headphone", price: 99.99, image: "/png3.webp" },
  { id:18, name: "Gaming Chair", price: 284.99, image: "/png4.webp" },
];

function Accessories() {
      const [showToast, setShowToast] = useState(false);
  
  useEffect(() => {
  document.title = "Accessories";
}, []);
const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...item,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 2500);
};
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Slider */}
      <section id="LaptopHeader">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`accessorieslide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content3">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a href="#cards_accessories">
                <button>Shop Now</button>
                </a>
              </div>
            </div>
          ))}

          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>

          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>
<section id="cards_accessories">
 <div className="Accessories_Header">
      <div className="cart-icon"> 
           {/* Cart Icon */}
              <Link to="/cart">
                <FaShoppingCart  />
              </Link>
            </div>
                  <h1>Feature Accessories</h1>
            </div>
      {/* First row */}
       <div className="content">
  {accessories.slice(0, 3).map((item, index) => (
    <React.Fragment key={index}>

      {showToast && (
        <div className="toast">
          <FaShoppingCart className="toast-icon" />
          Added To Cart
        </div>
      )}

      <div className="card">
        <img src={item.image} alt={item.name} />

        <b>{item.name}</b>

        <span>
          <p>High Quality</p>
        </span>

        <p>${item.price}</p>

        <button
          className="addcart"
          onClick={() => addToCart(item)}
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>

    </React.Fragment>
  ))}
</div>
</section>
      {/* Second row */}
      <div className="content2">
        {accessories.slice(3,6).map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <b>{item.name}</b>
            <span><p>High Quality</p></span>
            <p>${item.price}</p>

            <button className="addcart"onClick={() => addToCart(item)}>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;