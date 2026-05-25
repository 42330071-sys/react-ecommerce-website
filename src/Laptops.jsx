import React, { useEffect, useState } from "react";
import "./Laptops.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Dell XPS 15",
    description: "Powerful performance for professionals",
    image: "/new.webp",
  },
  {
    title: "MacBook Pro 16",
    description: "Unleash your creativity",
    image: "/mac2.jpg",
  },
  {
    title: "Asus ROG",
    description: "Gaming laptops at its best",
    image: "/asus.webp",
  },
];

const laptops = [
  {
    id:1,
    image: "/HP-15s.jpeg",
    name: "HP-15s",
    quality: "High Quality",
    price: 349.99,
  },
  {
        id:2,
    image: "/MacBookPro.jpeg",
    name: "MacBookPro-14inch",
    quality: "High Quality",
    price: 1974.99,
  },
  {
        id:3,
    image: "Asus.jpeg",
    name: "ASUS Zenbook 14 OLED",
    quality: "High Quality",
    price: 749.99,
  },
  {
        id:4,
    image: "/Dell-Inspiron.jpeg",
    name: "Dell Inspiron-15",
    quality: "High Quality",
    price: 299.99,
  },
  {
        id:5,
    image: "/Lenovo.jpeg",
    name: "Lenovo IdeaPad-3",
    quality: "High Quality",
    price: 219.99,
  },
  {
        id:6,
    image: "/bookpro.jpeg",
    name: "Galaxy BookPro-360",
    quality: "High Quality",
    price: 399.99,
  },
];

function Laptops() {
    const [showToast, setShowToast] = useState(false);
  
  useEffect(() => {
  document.title = "Laptops";
}, []);
const addToCart = (laptop) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

 const existingItem = cart.find(
      (item) =>
        item.id === laptop.id &&
        item.selectedImage === laptop.selectedImage
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...laptop,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 2500);}


  

  const [selectedLaptop, setSelectedLaptop] = useState(null);

  const openLaptop = (laptop) => {
  setSelectedLaptop(laptop);
  }
   const closeLaptop = () => {
    setSelectedLaptop(null);
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div>
      {/* Header Slider */}
      <section id="LaptopHeader">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a href="#cards_laptop">
                <button>Shop Now</button>
                </a>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>

          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section id="cards_laptop">
      <div className="Laptop_Header">
<div className="cart-icon"> 
     {/* Cart Icon */}
        <Link to="/cart">
          <FaShoppingCart  />
        </Link>
      </div>
            <h1 id="laptopHeader">Feature Laptops</h1>
      </div>
      <div className="content">
  {laptops.slice(0, 3).map((laptop, index) => (
    <React.Fragment key={index}>
      
      {showToast && (
        <div className="toast">
          <FaShoppingCart className="toast-icon" />
          Added To Cart
        </div>
      )}

      <div className="card">
        <img
          src={laptop.image}
          alt={laptop.name}
          onClick={() => openLaptop(laptop)}
        />

        <b>{laptop.name}</b>

        <span>
          <p>{laptop.quality}</p>
        </span>

        <p>${laptop.price}</p>

        <button
          className="addcart"
          onClick={() => addToCart(laptop)}
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>

    </React.Fragment>
  ))}
</div>
</section>
      <div className="content2">
        {laptops.slice(3, 6).map((laptop, index) => (
          <div className="card" key={index}>
<img
  src={laptop.image}
  alt={laptop.name}
  onClick={() => openLaptop(laptop)}
/>
            <b>{laptop.name}</b>

            <span>
              <p>{laptop.quality}</p>
            </span>

            <p>${laptop.price}</p>

            <button className="addcart"
                onClick={() => addToCart({
    ...laptop,
    selectedImage:laptop.image})}>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
        </div>
         {selectedLaptop && (
          <div className="laptop-details">
            <div className="laptop-details-content">
        
               <img
               src={selectedLaptop.image}
          alt={selectedLaptop.name}
        />
        <button className="close-btn" onClick={closeLaptop}>
                ✖
              </button>
              <h2>{selectedLaptop.name}</h2>
        
              <p>-Strong Performance</p>
                      <p>-Long battery life</p>
              <p>-Affordable price</p>

              <button id="addcart_laptop" onClick={() => selectedLaptop && addToCart(selectedLaptop)}>
                <FaShoppingCart /> Add to Cart
              </button>
        
            </div>
          </div>
            )}
      </div>
  );
}

export default Laptops;