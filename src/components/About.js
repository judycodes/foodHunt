import React from 'react';
import Navbar from './Navbar';

const About = () => {
    
    return (
        <div>

            <Navbar />
            <div  className="about-container">

            <h1 className="aboutTitle">The Very Hungry Developer</h1>  

<div className="about-contentText">
    <div className ="appetizer">
        <p className="empty">THE APPETIZER</p>

        <p className="abtP">FOOD HUNT is a React.js web application utilizing third-party API and services (Unsplash, Edamam, and Yelp Fusion) for various featured components.</p>

        <p className="abtP">FOOD HUNT is the capstone product of Judy Truong from her time at CUNY TechWorks' inaugural Summer Intensive Bootcamp Software Development Program at Queensborough Community College.</p>
    </div>
    

    <div className="mains">
        <p className="full">THE MAIN COURSE</p>
        <p className="abtP">When I was young, I always had my head in a book...or some other printed text. Recipes were a particular area of fascination for me. I likely perused thousands and still continue to do so.</p>

        <p className="abtP">When given the opportunity to apply all that I learned during my time at CUNY TechWorks for a passion capstone project, it only made sense that I would transition my interest in printed recipes to a digital format.</p>

        <p className="abtP">Much of the features on this application were the results of much reflection on my lifestyle. While I enjoy food and recipes, I knew there was little likelihood of me actually cooking anything from recipe searches. That awareness inspired me to utilize the Yelp Fusion API. At the same time, my late nights scrolling through food images on Instagram led to the creation of my many image loops throughout this application. These images came in handy when trying to come up with food-related terms for my feature search inputs. I can only hope you enjoy and find FOOD HUNT useful for your next craving.</p>
    </div>
</div>

            </div>
            
                
        </div>
    )
}

export default About;
