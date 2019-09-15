import React, { Component } from 'react';
import axios from 'axios';
import RestaurantResults from './RestaurantResults';
import NeonLoop from './NeonLoop';
import hangry from '../../assets/hangryplaceholder.jpg'; //initial image for one of the image loops
import yum from '../../assets/yumplaceholder.jpg'; //initial image for one of the image loops
import kitchen from '../../assets/kitchenplaceholder.jpg'; //initial image for one of the image loops 


export default class RestSearchForm extends Component {
   
  constructor(props){
        super(props);
        this.state = {
            yelpData : [],
            nowhere : "OH CREPE! Hangry With Nowhere To Go", //status of yelp search, whether there are results in yelpData or not
            searchTerm : '', //set to empty string for empty search input
            params: {
              term: 'pizza' //default parameter term for api call is pizza
              }
          }
        }

//=========[CUSTOM METHODS]=========        
    handleChange = event => {
        this.setState({
            searchTerm : event.target.value
        })          
    };
        

    apiCall = async (params) => {
    
        const cors_anywhere = 'https://cors-anywhere.herokuapp.com/'; //resolves Cross-Origin Resource Sharing (CORS) error
        //error occurs when web application running at one origin (domain) does not have permission to access selected resources from a server at a different origin

        const Bearer = `BEARER ${process.env.REACT_APP_YELPAPI_KEY}`;

        const config = await {
            //////////API KEY/////////
            headers: {'Authorization': Bearer,
            },  
            params, //input to specify data from api call
            
        };
    
        const data = await axios.get(`${cors_anywhere}https://api.yelp.com/v3/businesses/search?categories=restaurants,All&radius=13000`, config);
           
        await this.setState({
            yelpData: data.data.businesses //sets api response data to empty array
            //first "data" is the variable with the stored response from the api call, second "data" is a property/key within the api response object
        })
    }        
      
    
        handleSubmit = async(event) => {
            try {
            event.preventDefault(); //stops propogation
    
            //conditional for if there is no user input, default search input is pizza...because we are new yorkers and developers who appreciate good pizza
                if(this.state.searchTerm.length === 0) {
                    await this.setState({
                        params: {
                        term: 'pizza',
                        location: 'new york'},
                        searchTerm : ''  
                })
                } else { 
                    await this.setState({
                    params: {
                        term: this.state.searchTerm, //reassigns search input term as the parameter term in preparation for the api call
                    location: 'new york'},
                    searchTerm : '' //clears the search input after search submission
                    }) 
                }
                
                await this.apiCall(this.state.params); //passes argument containing new set parameter term to the apiCall function
                
    
        } catch(err) {
            console.log(`Error ( ${err} ) occurred during submit`);
            console.log("apicall", this.apiCall()); //check what is the response from apiCall and debug from there
        }
    }
   

//======[DISPLAY]======  
    render(){

    //======[VARIABLES RELATED TO DISPLAY]======
        const renderEmptyRestResults = 
            <div className="neonGroup">
                <NeonLoop placeholder={yum}/>
                <NeonLoop placeholder={hangry}/>
                <NeonLoop placeholder={kitchen}/>
            </div>; //images display when no results are within yelpData property

        const renderRestResults =
            <div className="restaurantCards-container">
            {this.state.yelpData.map((b, i) => {
            return <RestaurantResults  
                    key= {i}
                    bName = {b.name}
                    bImg = {b.image_url}
                    addOne = {b.location.display_address[0]}addTwo = {b.location.display_address[1]}
                    price = {b.price}
                    url = {b.url}
                    rating = {b.rating}
                    review = {b.review_count} />
            })}
            </div>;
            //maps and renders results from api response, passing selected information to restaurantresults/child component

    //======[RESTAURANTFORM DISPLAY]====== 
        return (
            <div className="restSearch-container">
                    
            <div className="restSearchForm-container">
                <h1 className="restSearchFormText-title smallCaps">Where's My Food At?</h1>
                
                <form onSubmit={this.handleSubmit} className="restSearch-form">
                
                    <input 
                        type="text" 
                        className="restSearch-bar"
                        value={this.state.searchTerm}
                        placeholder= "Hangry for: Pizza? Or a particular restaurant?"
                        name= "searchTerm" 
                        onChange={this.handleChange}/> 

                    <button type="submit" className="restSearch-btn">EXPLORE</button>

                    <div className="status">
                    <p className="restSearchFormNowhere">
                        <span className="full">Travel Itinerary: </span>
                            {this.state.yelpData.length ? "Get Going! Hunt For A Restaurant!!" : <span className="empty">{this.state.nowhere}</span>}
                    </p>

                    {/* require is a special built-in function keyword in node.js that loads modules/files   */}
                    <img 
                        src = {require('../../assets/Yelp_trademark_RGB.png')} 
                        alt = "yelp logo" 
                        className = "yelp_trademark" />
                    </div>
                   

                </form>
            </div>
        

            {/* conditional that will display something or the results from api call  */}    
                {this.state.yelpData.length ? renderRestResults : renderEmptyRestResults}
                
            </div>    
        )
    }
}

