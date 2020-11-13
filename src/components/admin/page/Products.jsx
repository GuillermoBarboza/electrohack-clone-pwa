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

  const handleDelete = (_id) => {
    axios({
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/products",
      data: {
        _id: _id,
      },
    }).then((res) => {
      setProducts(products.filter((product) => product._id !== _id));
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <SearchBox setSearch={setSearch} />
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">$</th>
                <th scope="col">Stock</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => handleDelete(product._id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Products;
