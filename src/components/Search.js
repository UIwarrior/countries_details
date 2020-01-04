import React from 'react';
import { Form, Col } from 'react-bootstrap';

const SearchBar = (props) => {
    return  (
    <Form.Control onChange={props.onSearchValue} type="text" placeholder="Search for a country..." />
    )   
}
export default SearchBar;
  