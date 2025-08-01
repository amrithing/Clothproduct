import React, { useState } from "react";
import Img1 from "../src/assests/Rectangle 1.svg";

const products = [
  {
    title: "Plain White Shirt",
    price: "$29.00",
    img: {Img1},
    description: "A classic plain white shirt suitable for any casual outing.",
  },
  {
    title: "Denim Jacket",
    price: "$69.00",
    img: "https://i.ibb.co/VgQ6nDv/denim.png",
    description: "Stylish denim jacket perfect for all seasons.",
  },
  {
    title: "Black Polo Shirt",
    price: "$49.00",
    img: "https://i.ibb.co/0qkWLqb/blackpolo.png",
    description: "Comfortable black polo shirt for casual and semi-formal wear.",
  },
  {
    title: "Blue Sweatshirt",
    price: "$79.00",
    img: "https://i.ibb.co/pvKVchf/blue-sweatshirt.png",
    description: "Cozy blue sweatshirt to keep you warm and stylish.",
  },
  {
    title: "Blue Plain Shirt",
    price: "$49.00",
    img: "https://i.ibb.co/yB7vQsj/blueplain.png",
    description: "Elegant blue shirt with a crisp design for any occasion.",
  },
  {
    title: "Dark Blue Shirt",
    price: "$89.00",
    img: "https://i.ibb.co/yfsFYB9/darkblue.png",
    description: "Dark blue formal shirt ideal for professional settings.",
  },
  {
    title: "Outcast T Shirt",
    price: "$19.00",
    img: "https://i.ibb.co/Lkj44kP/outcast.png",
    description: "Trendy printed T-shirt for a bold and edgy look.",
  },
  {
    title: "Polo Plain Shirt",
    price: "$29.00",
    img: "https://i.ibb.co/TL9CZ60/polowhite.png",
    description: "Minimalist polo shirt in white, a wardrobe essential.",
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <h1>Discover NEW Arrivals</h1>
      <p className="subtitle">Recently added shirts!</p>

      <div className="grid">
        {products.map((product, index) => (
          <div key={index} className="card" onClick={() => setSelected(product)}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="overlay">
          <div className="modal">
            <button className="close" onClick={() => setSelected(null)}>✕</button>
            <img src={selected.img} alt={selected.title} />
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
            <p className="price">{selected.price}</p>
            <select className="size">
              <option>Size: S</option>
              <option>Size: M</option>
              <option>Size: L</option>
              <option>Size: XL</option>
            </select>
            <div className="actions">
              <button className="buy">Buy Now</button>
              <button className="cart">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
