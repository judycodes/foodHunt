import React, { Component } from 'react';


export default class FoodImages extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageSrc : this.props.placeholder,
            imgCollection: this.props.collection
            }
        }
    

///////LIFECYCLE METHODS/////// 
    componentWillMount() {
        try{
            //random number function for use in imageSrc value's url
            const getRandomNum = () => {
                return Math.floor(Math.random() * 51);
              };

              //every two seconds value of imageSrc changes with url of image randomly picked from my specified Unsplash collection, which randomizes img display in render
            this.foodLoop = setInterval(() => this.setState({ imageSrc : `https://source.unsplash.com/collection/${this.state.imgCollection}/${getRandomNum()}` }), 2000);
        } catch(err) {
                  console.log(`Error ( ${err} ) occurred during food img retrieval`);
        }
    }
        
    componentWillUnmount() {
        clearInterval(this.foodLoop);
    } 
  
//======[foodImage Loop Display]======    
    render() {
        return (
                <img src={this.state.imageSrc} className = "foodImage image" alt="" />
        )    
    }
}
