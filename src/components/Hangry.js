import React, { Component } from 'react'
import Navbar from './Navbar';
import RestSearchForm from './yelpSearch/RestSearchForm';


class Hangry extends Component {
    render() {
        return (
            <div className="hangry-container">
                <Navbar />
                
                <RestSearchForm />
            </div>
        )
    }
}

export default Hangry;

