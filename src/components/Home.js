import React from 'react';
import Navbar from './Navbar';
import RecipeForm from './recipeFinder/RecipeForm';


const Home = () => {
    return (
        <div>     
            <Navbar />
            <div id="edamam-badge" data-color="badge"></div> 
            <RecipeForm />
              
        </div>
    )
}


export default Home;
