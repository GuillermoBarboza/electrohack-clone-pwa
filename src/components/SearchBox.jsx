import React from "react";
import { Form, FormControl } from "react-bootstrap";

const SearchBox = ({ setSearch }) => {
	return (
		<Form inline>
			<FormControl
				type="text"
				placeholder="Search..."
				className="mr-sm-2 custom-form-control"
				onChange={(e) => setSearch(e.target.value)}
			/>
		</Form>
	);
};

export default SearchBox;
