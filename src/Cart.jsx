import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
  
  useEffect(() => {
    document.title = "Cart";
}, []);
    const increaseQuantity = (id) => {

  const updatedCart = cart.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  setCart(updatedCart);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const decreaseQuantity = (id) => {

  const updatedCart = cart.map((item) =>
    item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  setCart(updatedCart);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const resetCart = () => {
  localStorage.removeItem("cart");
  setCart([]);
};
const removeItem = (id, selectedImage) => {

  const updatedCart = cart.filter(
    (item) =>
      !(
        item.id === id &&
        item.selectedImage === selectedImage
      )
  );

 setCart(updatedCart);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
const [cart, setCart] = useState([]);
  useEffect(() => {
      const loadCart = () => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  };
 loadCart();

  window.addEventListener("storage", loadCart);

  return () => {
    window.removeEventListener("storage", loadCart);
  };
  }, []);
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>My Cart</h1>

      <div className="cart-header">
        <p>PRODUCT</p>
        <p>PRICE</p>
        <p>QTY</p>
        <p>TOTAL</p>
      </div>
      {cart.map((item) => (

        <div className="cart-item" key={item.id}>
<button
  className="remove-btn"
  onClick={() =>
    removeItem(item.id, item.selectedImage)
  }>X
</button>
          <div className="product-info">
<img src={item.selectedImage || item.image} />
            <div>
              <h3>{item.name}</h3>
            </div>
          </div>

          <p>${(Number(item.price || 0) * item.quantity).toFixed(2)}</p>

<div className="quantity">
  <button onClick={() => decreaseQuantity(item.id)}>
    -
  </button>

  <p>{item.quantity}</p>

  <button onClick={() => increaseQuantity(item.id)}>
    +
  </button>
</div>

<p>${item.price * item.quantity}</p>
          <p>
            ${(item.price * item.quantity)}
          </p>

        </div>
      ))}

      
<div className="cart-total">
  <h2>Total: ${(totalPrice).toFixed(1)}</h2>

  <button className="reset-btn" onClick={resetCart}>
    Reset Cart
  </button>
</div>
    </div>
  );
}

export default Cart;