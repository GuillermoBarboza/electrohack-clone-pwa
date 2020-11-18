import React, { useEffect, useState } from "react";
import { InputGroup, DropdownButton, FormControl, Form } from "react-bootstrap";
import axios from "axios";

const SelectCategory = ({ setCategory, category }) => {
  const [categoriesAvailable, setCategoriesAvailable] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/categories",
    })
      .then((response) => {
        console.log(response.data);
        setCategoriesAvailable(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Form.Label for="category">Category</Form.Label>
      <Form.Control as="select" id='category' onChange={(e) => {
        setCategory(e.target.value);
        console.log(e.target.value);
        }}>
        {categoriesAvailable &&
          categoriesAvailable.map((categoryOption) => {
            if (categoryOption._id === category) {
              return (
                <option selected value={categoryOption._id}>
                  {categoryOption.name}
                </option>
              );
            } else {
              return (
                <option value={categoryOption._id}>
                  {categoryOption.name}
                </option>
              );
            }
          })}
      </Form.Control>
    </>
  );
};

export default SelectCategory;
