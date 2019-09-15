import React, { Component } from 'react';


export default class NeonLoop extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageSrc : this.props.placeholder
            }
        }
    

///////LIFECYCLE METHODS/////// 
    componentWillMount() {
        try{
            //random number function for use in imageSrc value's url
            const getRandomNum = () => {
                return Math.floor(Math.random() * 71);
              };

            //every three seconds value of imageSrc changes with url of image randomly picked from my specified Unsplash collection, which randomizes img display in render
            this.neonLoop = setInterval(() => this.setState({ imageSrc : `https://source.unsplash.com/collection/8321699/${getRandomNum()}` }), 3000);
        } catch(err) {
                  console.log(`Error ( ${err} ) occurred during neon img retrieval`);
                  
        }
    }
        
    componentWillUnmount() {
        clearInterval(this.neonLoop);
    } 
  
//======[neonImage Loop Display]======    
    render() {
        return (
            <img src={this.state.imageSrc} className = "neonImage" alt="" />
        )    
    }
}