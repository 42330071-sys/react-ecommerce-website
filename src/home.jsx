import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
function Home() {
  useEffect(() => {
  document.title = "Home";
}, []);
  const navigate =useNavigate();
    const goLaptops = () => {
    window.open("/laptops", "_blank");
  };
const [showMessage, setShowMessage] = useState(false);

const handleClick = () => {
  setShowMessage(true);

  setTimeout(() => {
    setShowMessage(false);
  }, 3000);
};
  const goPhones = () => {
    window.open("/phones", "_blank");
  };

  const goAccessories = () => {
    window.open("/accessories", "_blank");
  };
  return (
    <div className="homepage">
    <div className="firstpage">

      {/* NAVIGATION */}
      <div className="nav">
        <div className="container">

          <div className="btn"><a href="#">Home</a></div>
          <div className="btn"><a href="#Contact">Contact</a></div>
          <div className="btn"><a href="#About">About</a></div>
          <div className="btn"><Link to="/cart">Cart</Link></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 60"
            height="60"
            width="400"
            overflow="visible"
            className="outline"
          >
            <rect
              strokeWidth="5"
              fill="transparent"
              height="60"
              width="400"
              y="0"
              x="0"
              pathLength="100"
              className="rect"
            />
          </svg>

        </div>
      </div>

      {/* HERO SECTION */}
      <h1 id="welcome">Welcome</h1>
      <h2 id="oursite">to our site</h2>

      <a href="#home">
        <button type="button" id="join">
          Explore Categories
        </button>
      </a>

      {/* PRODUCTS */}
      <section id="home">
        <div className="secondpage">

          <div className="laptops">
            <h3>Laptops</h3>
            <hr />
            <img src="/tab.png" alt="laptop" id="tab" />
              <button id="lap_but" type="button" onClick={goLaptops}>Show me</button>
          </div>

          <div className="phones">
            <h3>Phones</h3>
            <hr />
            <img src="/ipnone.png" alt="phone" id="iphone" />
              <button id="ph_but" type="button" onClick={goPhones}>Show me</button>
          </div>

          <div className="Accesorries">
            <h3>Accessories</h3>
            <hr />
            <img
              src="/security-camera-picture-free-png.png"
              alt="accessories"
              id="acc"
            />
              <button id="acc_but" type="button" onClick={goAccessories}>Show me</button>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="About">
        <div className="aboutpage">

          <h2>About Us</h2>

          <p>
            Welcome to <strong>Rammal Store</strong>, your trusted online computer shop.
            We provide high-quality laptops, desktop computers, gaming PCs, phones and accessories
            at competitive prices.
          </p>

          <ul>
            <li>✔ Genuine and quality products</li>
            <li>✔ Affordable pricing</li>
            <li>✔ Fast and secure delivery</li>
            <li>✔ Friendly customer support</li>
          </ul>

          <p>
            Our mission is to deliver reliable technology solutions for students,
            professionals, gamers, and businesses.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact">
        <div className="contactpage">

          <h2>Contact Us</h2>

          <p>Have questions? We’re here to help! Reach out to us via form, email, or phone.</p>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button onClick={handleClick}>
  Send Feedback
</button>

{showMessage && (
  <div className="feedback-toast">
    🎉 Thank you for your feedback!
  </div>
)}
          </form>

          <p>Email: rammalshop@gmail.com</p>
          <p>Phone: +76 75 85 02</p>

        </div>
      </section>

    </div>
    </div>
  );
}

export default Home;