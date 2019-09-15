import React from 'react';
import yelpimgplaceholder from '../../assets/yelpimgplaceholder.jpg'; //if the api does not return an image for the business, then this placeholder will be used in result card


//restaurant card/individual result from yelp search 
const RestaurantResults = ({bName, bImg, addOne, addTwo, price, url, rating, review}) => {
    
    return(
        <div className="resultCard-containerRest">
            <a 
                href={url} 
                rel="noopener noreferrer" 
                target="_blank" 
                className="resultCardLink">
                
            <div className="resultCard-top">

            <img 
                src={bImg !== "" ? bImg : yelpimgplaceholder} 
                alt={bName}  
                className="resultCardImgRest"/>

            </div>

            <div className="resultCard-text sideBorders">
                <p className="resultCardTitle smallCaps">{bName}</p>
                <p className="resultCardSmP">{addOne}</p>
                <p className="resultCardSmP">{addTwo}</p>
                
                <div className = "extraYelpDeets">
                    <p className="resultCardSmP">Price: {price !== undefined ? price : "TBD"}</p>
                    <img
                        className = "yelpStars" 
                        src = {require(`../../assets/yelp_stars/${rating}.png`)}
                        alt = {`yelp ratings: ${rating}/5`}/>
                    <p className="resultCardSmP"> Based on {review} Reviews</p>
                </div>
            </div>    
                
            </a>            
        </div>

    );
}

export default RestaurantResults;