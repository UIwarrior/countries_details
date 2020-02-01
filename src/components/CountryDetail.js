import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CountryDetail = (props) => {
    return (
        <Row>
          <Col sm ={6}>
              <img src="" alt="Country Flag" />
              </Col>  
              <Col sm={6}>
                  <Row>
                  <h2>Country Name</h2>
                  <Col sm={6}>
                  <span>Native Name:</span>
                  <span>Population:</span>
                  <span>Region:</span>
                  <span>Sub Region:</span>
                  <span>Capital:</span>
                   </Col>  
                   <Col sm={4}>
                   <span>Top Level Domain:</span>
                   <span>Currencies:</span>
                   <span>Languages:</span>
                   </Col>  
                  </Row>
                  <Row>
                   <Col sm = {12}>
                       <span>Border Countries:</span>
                   </Col>
                  </Row>
              </Col>
         </Row>   
    )
}

export default CountryDetail;