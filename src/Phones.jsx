// Phones.jsx
import React, { useEffect, useState } from "react";
import "./Phones.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const slides = [
  {
    title: "Iphone XMAX",
    description: "Powerful performance for professionals",
    image: "/phone6.png",
  },
  {
    title: "Iphone 16 ProMAX",
    description: "Unleash your creativity",
    image: "/p10.png",
  },
  {
    title: "Iphone 12",
    description: "Phones at its best",
    image: "/p16.png",
  },
];


  

 
const phones = [
  {id:7, name: "Iphone 16 Pro", price: 999.99, image: "/Iphone16Pro.jpeg", colors: {
     white: "/Iphone16Pro.jpeg",
    black: "/iphone16pro-black.jpeg",
    rose: "/iphone16pro-beige.jpeg"
   
  } },
  {id:8, name: "Iphone 17 Pro", price: 1499.99, image: "/iphone17-new.jpeg",colors: {
    orange: "/iphone17-new.jpeg",
    navyblue: "/iphone17-navy.jpeg",
    white    : "/iphone17-white.jpeg" }},

  {id:9, name: "Iphone 15", price: 649.99, image: "/iphone15-black.jpeg",colors: {
    black: "/iphone15-black.jpeg",
    green: "/iphone15green.jpeg",
    babyblue: "/iphone15-babyblue.jpeg" }}, 

  {id:10, name: "Galaxy A54-5G", price: 319.99, image: "/SamsungGalaxyA54-violet.jpeg",colors: {
    violet: "/SamsungGalaxyA54-violet.jpeg",
    black: "/SamsungGalaxyA54-black.jpeg",
    white: "/SamsungGalaxyA54-white.png" }}, 

  {id:11, name: "Galaxy S24", price: 749.99, image: "/SamsungGalaxyS24.jpeg" ,colors: {
    black: "/SamsungGalaxyS24.jpeg",
    yellow: "/SamsungGalaxyS24-Yellow.png",
    grey: "/SamsungGalaxyS24-Grey.png" }},

  {id:12, name: "Galaxy A70", price: 199.99, image: "/SamsungGalaxyA70-black.webp",colors: {
    black: "/SamsungGalaxyA70-black.webp",
    babyblue: "/SamsungGalaxyA70-babyblue.jpeg",
    orange: "/SamsungGalaxyA70-orange.jpeg" }},
   
  
];
function Phones() {
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
  document.title = "Phones";
}, []);
  const addToCart = (phone) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

 const existingItem = cart.find(
      (item) =>
        item.id === phone.id &&
        item.selectedImage === phone.selectedImage
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...phone,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 2500);}


  


  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [activeColors, setActiveColors] = useState({});
const openPhone = (phone) => {
  setSelectedPhone(phone);

  setActiveColors((prev) => ({
    ...prev,
    [phone.id]: prev[phone.id] || phone.image,
  }));
};
  

  const closePhone = () => {
    setSelectedPhone(null);
  };
const changeColor = (phoneId, image) => {
  setActiveColors((prev) => ({
    ...prev,
    [phoneId]: image,
  }));
};

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
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
      <section id="PhoneHeader">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`phoneslide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a href="#cards_phone">
                <button>Shop Now</button>
                </a>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>

          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>
<section id="cards_phone">
      <div className="Phone_Header">
      <div className="cart-icon"> 
           {/* Cart Icon */}
              <Link to="/cart">
                <FaShoppingCart  />
              </Link>
            </div>
                  <h1>Feature Phones</h1>
            </div>
      <div className="content">
        {phones.slice(0,3).map((phone) =>{   
          const imageToShow = activeColors[phone.id] || phone.image;         
return (
  <>
  {showToast && (
  <div className="toast">
    <FaShoppingCart className="toast-icon" />
    Added To Cart
  </div>
)} 

          <div className="card_phone" key={phone.id}>
            <img
  src={imageToShow}
  alt={phone.name}
  onClick={() => openPhone(phone)}
  style={{ cursor: "pointer" }}
/>
{phone.colors && (
  <div className="colors">
    {Object.entries(phone.colors).map(([color, img]) => (
      <div
        key={color}
        className={`circle ${color}`}
        onClick={() => changeColor(phone.id, img)}
        title={color}
      />
    ))}
  </div>
)}
            <b>{phone.name}</b>

            <span>
              <p>High Quality</p>
            </span>

            <p>${phone.price}</p>

            <button className="addcart_phone"  


            onClick={() =>
  addToCart({
    ...phone,
    selectedImage: activeColors[phone.id] || phone.image,
  })
            
}>
              
              <FaShoppingCart /> Add to Cart
            </button>
                        
          </div>
          </>
);
})}
      </div>
</section>
      <div className="content2">
  {phones.slice(3, 6).map((phone) => {
    const imageToShow = activeColors[phone.id] || phone.image;

    return (
      <div className="card_phone" key={phone.id}>
        <img
          src={imageToShow}
          alt={phone.name}
          onClick={() => openPhone(phone)}
          style={{ cursor: "pointer" }}
        />

        {phone.colors && (
  <div className="colors">
    {Object.entries(phone.colors).map(([color, img]) => (
      <div
        key={color}
        className={`circle ${color}`}
        onClick={() => changeColor(phone.id, img)}
        title={color}
      />
    ))}
  </div>
)}

        <b>{phone.name}</b>

        <span>
          <p>High Quality</p>
        </span>

        <p>${phone.price}</p>

        <button
          className="addcart_phone"onClick={() =>
  addToCart({
    ...phone,
    selectedImage: activeColors[phone.id] || phone.image,
  })
}
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    );
  })}
</div>
    {selectedPhone && (
  <div className="phone-details">
    <div className="phone-details-content">

       <img
  src={activeColors[selectedPhone.id] || selectedPhone.image}
  alt={selectedPhone.name}
/>
<button className="close-btn" onClick={closePhone}>
        ✖
      </button>
      <h2>{selectedPhone.name}</h2>

      <p>-Storage Option:256GB</p>
      <p>-Resolution:2556x1179</p>
      <p>-RAM:8GB</p>

      <button id="addcart_phone" onClick={() => selectedPhone && addToCart(selectedPhone)}>
        <FaShoppingCart /> Add to Cart
      </button>

    </div>
  </div>
    )}
  </div>
  );
}
export default Phones;