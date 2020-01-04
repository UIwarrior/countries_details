import React from 'react';
import { Card } from 'react-bootstrap'

const Countries = (props) => {
    const {name, capital, region, population, flag} = props.country;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={flag} style={{maxHeight:'140px'}} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                 <p><strong>Population: </strong>{population} </p>    
                 <p><strong>Region: </strong>{region} </p>  
                 <p><strong>Capital: </strong>{capital} </p>  
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Countries;