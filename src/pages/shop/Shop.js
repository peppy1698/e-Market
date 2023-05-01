import React, { useState, useEffect, useContext } from "react";
import "./Shop.css";
import { ShopContext } from "../../context/shop-context";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useContext(ShopContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const cartItemsAmount = (productId) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === productId
    );
    if (itemIndex >= 0) {
      return cartItems[itemIndex].quantity;
    } else {
      return 0;
    }
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2 className="product-name">{product.title}</h2>
            <img
              className="product-img"
              src={product.thumbnail}
              alt={product.title}
            />
            <p className="product-desc">{product.description}</p>
            <div className="product-info">
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-rating">Rating: {product.rating} ⭐</p>
            </div>
            <button className="button" onClick={() => addToCart(product)}>
              Add To Cart
              {cartItemsAmount(product.id) > 0 &&
                ` (${cartItemsAmount(product.id)})`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
