import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';
import FoodImages from '../FoodImages';
import homeplaceholder from '../../assets/homeplaceholder.jpg';
import hangryFace from '../../assets/hangry.png';

const RecipeForm = () => {

///////REACT HOOKS///////
//=========[STATE/useState()]=========
  const [recipes, setRecipes] = useState([]); //recipes set to empty array
  const [search, setSearch] = useState(""); //search set to empty string, once input changes then the value in the input will become the string the user inputs
  const [query, setQuery] = useState(""); //no default search input
  const [stomach] = useState("Hungry. No Recipes In Sight!"); //default stomach status, which will change depending on whether recipes length value is empty or not
  const [hangryMode, setHangryMode] = useState(false); //hangryMode is false to hide the button that would redirect user to Hangry page/YelpSearch component
  let [clicked, setClicked] = useState(0); //initalizes the click count to one for first

//======[useEffect()]======
  useEffect( () => {//typically runs every time page rerenders, unless dependencies are present
    //////////API KEY/////////
const RECIPEAPI_ID = process.env.REACT_APP_RECIPEAPI_ID;
const RECIPEAPI_KEY = process.env.REACT_APP_RECIPEAPI_KEY;
//function fetches data from EDAMAM API
  const getRecipes = async () => {

    const responseFromAPI = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${RECIPEAPI_ID}&app_key=${RECIPEAPI_KEY}&from=0&to=9`) //api call

    const data = await responseFromAPI.json(); //response stored as json

    setRecipes(data.hits); //response is set to be recipes' value

}

  getRecipes(); //invokes function, which is the api call and sets response data returned to recipes property


}, [query] //useEffect() second argument, a dependency that makes useEffect() activate only when second argument, in this case query, is changed
//query value is search property value obtained from updateSearch, which was set to query in getSearch on form submission

);

//=========[CUSTOM METHODS]=========

  //======SEARCH INPUT======
  const updateSearch = event => {

    setSearch(event.target.value); //value of recipeForm input changes and set to search property

  }

  //======SEARCH FORM======
  const getSearch = event => {

    event.preventDefault();

    setQuery(search); //assigns query to search value onSubmit

    setSearch(""); //resets recipeForm input into empty string after search value is stored in query state property

    setClicked(clicked+1); //increments click count by 1, every time search form is submitted

    if(clicked >= 2){
      setHangryMode(true); //upon three or more recipe searches this conditional sets hangryMode to true, which reveals the hangryMode button/Link redirect
    }

  }

  //======[VARIABLES RELATED TO DISPLAY]======
  const imgcollection = 8272733; //meal related imgs

  const renderEmptyResults = <FoodImages placeholder={homeplaceholder} collection={imgcollection}/>; //if there are no results from the api call or upon initial rendering of recipe component, the loop of food images will display
  //user will know there are no results from the current mood status stored in stomach property

  const renderRecipeResults =
      <div className="recipeCards-container">
      {recipes.map((recipe, index) => (

        <Recipe
          healthLabels={recipe.recipe.healthLabels} //first recipe is from map fn and second recipe is from api response data
          key={index}
          dietLabels={recipe.recipe.dietLabels}
          source={recipe.recipe.source}
          title={recipe.recipe.label}
          servings={recipe.recipe.yield}
          url={recipe.recipe.url}
          image={recipe.recipe.image}
          />

        ))}

      </div>;//maps and renders results from api response, passing selected information to recipe/child component

//Style Objects//
const hangryModeStyle = {
  visibility: 'visible',
  textAlign: 'center',
  fontVariant: 'small-caps',
  fontSize: '25px',
  padding: 10,
  borderRadius: 20,
  marginTop: 20,
  marginLeft: 50,
  width: 400,
  boxShadow: '0 4px 6px 0 rgba(0,0,0,0.7)',
  backgroundColor: 'rgba(0,0,0,0.4)',
  border: '1px solid #fff'
  };

const hangryHidden = {
  visibility: 'hidden'
};

//======[RECIPEFORM COMPONENT DISPLAY]======
  return (
    <div>

      <div className= "recipeSearch-container">
      <div className= "recipeSearchForm-container">

      <h1 className= "recipeSearchFormText-title textCenter smallCaps">What's Cooking?</h1>

      <form className="recipeSearch-form" onSubmit={getSearch}>

        <input
          placeholder= "Your Stomach Is Growling For:"
          type="text"
          className="recipeSearch-bar"
          value={search}
          onChange={updateSearch} />

        <button
          type="submit"
          className="recipeSearch-btn textCenter smallCaps">
          <em>SEARCH</em>
        </button>

        <p className="recipeSearchFormStomach">
          <span className="full">Current Mood: </span>
          {recipes.length ? "Ready To Hunt For A Recipe!!" : <span className="empty">{stomach}</span>}
        </p>


        <div style={hangryMode ? hangryModeStyle : hangryHidden}>
        <Link to="/foodHunt/hangry" className="hangry-link">
            <img
              src={hangryFace}
              className="hangryFace"
              alt="hangry emoji"/>Click to Get Fed...Not Fed Up!
        </Link>
        </div>

      </form>



    </div>

    {/* conditional that will display the loop of food images or the results from api call */}
    {recipes.length ? renderRecipeResults : renderEmptyResults }

      </div>


    </div>
  );

};

export default RecipeForm;
