import React from 'react'

//recipe card/individual result from recipe finder search 
const Recipe = ({title, servings, url, image, source, dietLabels, healthLabels}) => {
    
    return(
        <div className="resultCard-container">
            <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resultCardLink">

            <div className="resultCard-top">
                <img 
                src={image} 
                alt={`${title}`} 
                className="resultCardImg" />             
            </div>
            
            <div className="resultCard-text">
                <p className="resultCardTitle smallCaps">{title}</p>
                <p className="resultCardSmP">From {source}</p>
                <p className="resultCardSmP">Yields: {servings}</p>
                <p className="resultCardP">Dietary Highlights:</p>
                <ul >
                {healthLabels.map((hlabel, index) => (
                    <li 
                        key={index} 
                        className="resultCardHighlights"> {hlabel} 
                    </li>
                ))}
                </ul> 
            </div>
            </a>        
        </div>
    );
}

export default Recipe;