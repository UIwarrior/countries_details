/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Header from './Header';
import Routes from '../Routes';
import { Container } from 'react-bootstrap';

class App extends React.Component {
    render(){
        return (
            <Container>
                <Header />
                <Routes />
            </Container>
        )
        }
    
    }
export default App;