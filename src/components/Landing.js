import React from 'react';
import { Link } from 'react-router-dom';
import landingplaceholder from '../assets/landingplaceholder.jpg';
import FoodImages from './FoodImages';
import '../App.css'

const imgcollection = 8272841; //cooking related imgs

const Landing = () => {
    return (
        <div className= "landing-container">
            <div className="landing-content">
                <FoodImages placeholder={landingplaceholder} collection={imgcollection} />

                <div className="landing-text-container">
                    <h1 className="textCenter smallCaps" id="landing-brand-text">Food Hunt</h1>
                    <p className="textCenter smallCaps">the place to explore BEFORE</p>
                    <p className="textCenter smallCaps">your stomach roars</p>
                    <Link to="/foodHunt/home" className="textCenter smallCaps landing-link">Get Cooking!</Link>   
                </div>
            </div>
        </div>
    )
}


export default Landing;
