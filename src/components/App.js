/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Header from './Header';
import Routes from '../Routes';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Routes />
            </div>
        )
    }
}
export default App;
