import "./Product.css";

const Product = ({ mapData }) => {
  return (
    <div>
      {/* <button onClick={addItem}>Add</button>
      <button onClick={backItem}>Back</button> */}
      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
      <div className="products">{mapData}</div>
    </div>
  );
};

export default Product;

// import "./Product.css";
// import { Link } from "react-router-dom";

// const Product = ({ products, addToCart }) => {
//   return (
//     <div className="products">
//       {products.map((product, index) => (
//         <div className="product_data" key={index}>
//           <img src={product.image} alt={product.title} />
//           <h2 className="title">
//             {product.title.length > 20
//               ? `${product.title.slice(0, 20)}...`
//               : product.title}
//           </h2>
//           <strong>${product.price}</strong>
//           <button onClick={() => addToCart(product)}>
//             <Link to="/cart">Buy</Link>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Product;
