import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../../SearchBox";
import CreateForm from "../CreateForm";
import UpdateForm from "../UpdateForm";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let url = "http://localhost:8000/api/v1/products";
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
                          onClick={() => setProduct(product)}
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => handleDelete(product._id)}
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          {product ? (
            <UpdateForm
              product={product}
              setProduct={setProduct}
              setSearch={setSearch}
            />
          ) : (
            <CreateForm setProducts={setProducts} setSearch={setSearch} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
