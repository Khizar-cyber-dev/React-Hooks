import React from "react";

const initialProducts = [
  { id: 1, name: "Apple", price: 1.5, quantity: 1 },
  { id: 2, name: "Banana", price: 0.9, quantity: 2 },
  { id: 3, name: "Orange", price: 1.2, quantity: 1 },
];

export default function CartSystem() {
  const [cart, setCart] = React.useState(initialProducts);

  // Increase quantity
 const increaseQty  = (id) => {
    setCart(
        cart.map((item) => item.id === id ? {...item, quantity: item.quantity + 1 } : item)
    )
 }

 // Decrease Quantity
 const decreaseQty = (id) => {
    setCart(
        cart.map((item) => item.id === id
        ? {...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0} : item
    )
    )
 }

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <div>
                <strong>{item.name}</strong>
                <p>${item.price.toFixed(2)}</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <div>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ color: "red" }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}
