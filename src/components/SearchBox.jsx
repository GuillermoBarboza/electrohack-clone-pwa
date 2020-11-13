import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBox = ({ setSearch }) => {
  return (
    <Form className="mr-4" inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Form>
  );
};

export default SearchBox;
