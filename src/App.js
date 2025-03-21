import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./components/Product.css";
import "./styles.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`);
    const product = await res.json();
    console.log(product);
    setProducts(product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (x) => {
    setCart((prev) => [...prev, x]);
  };

  const addItem = () => {
    setCount((prev) => prev + 1);
    if (count === 20) {
      setCount(20);
    }
  };

  const backItem = () => {
    setCount((prev) => prev - 1);
    if (count === 1) {
      setCount(1);
    }
  };

  const mapData = products.map((x, i) => (
    <div className="product_data" key={i}>
      <img src={x.image} alt={x.title} />

      <h2 className="title">
        {x.title.length > 20 ? `${x.title.slice(0, 10)}...` : x.title}
      </h2>

      <strong>${x.price}</strong>

      <button onClick={() => addToCart(x)}>
        <Link to="/cart">Buy</Link>
      </button>
    </div>
  ));

  const mapCart =
    cart.length > 0 ? (
      cart.map((x, i) => (
        <div className="product_data" key={i}>
          <img src={x.image} alt={x.title} />

          <h2 className="title">
            {x.title.length > 20 ? `${x.title.substring(0, 10)}...` : x.title}
          </h2>

          <strong>${x.price}</strong>
          <button onClick={addItem}>+</button>
          {count}
          <button onClick={backItem}>-</button>
          {/* <h4>Total : {count * x.price}</h4> */}
        </div>
      ))
    ) : (
      <p>Empty Cart</p>
    );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product mapData={mapData} />} />
          <Route path="/cart" element={<Cart mapCart={mapCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      {/* <Product cart={cart} mapData={mapData} /> */}
    </div>
  );
};

export default App;
