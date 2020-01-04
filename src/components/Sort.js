import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Sort = ({ regions }) => {
    console.log('regions', regions);
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter by Region
  </Dropdown.Toggle>

            <Dropdown.Menu>
                {regions.map(el => <Dropdown.Item >{el}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Sort;