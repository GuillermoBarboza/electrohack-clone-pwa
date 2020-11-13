import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../../SearchBox";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState(null);
  let url = "http://localhost:8000/api/v1/products";

  useEffect(() => {
    search && (url = url.concat(`/search?name=${search}`));
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, [search]);

  return (
    <div className="container mt-5">
      <SearchBox setSearch={setSearch} />
      <ul>
        {products &&
          products.map((product) => {
            return (
              <li>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.stock}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Products;
