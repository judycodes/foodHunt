# FOOD HUNT

React.js Web Application Utilizing Edamam and Yelp Fusion APIs to find recipes and restaurants

Images are courtesy of the fantastic photographers contributing to and sharing on Unsplash

## Getting Started

Make sure you have the prerequisites in place and you are ready to check out [Food Hunt](https://judycodes.github.io/foodHunt/)

If you are interested in an overview of Food Hunt and how the application is meant to look like and how it works, check out my [presentation](https://docs.google.com/presentation/d/1ucnAUz3ht5X36l-nwYT5ajqTNv9EtJ_kqQggJVwsxB8/edit?usp=sharing)

OR the [source code](https://github.com/judycodes/foodHunt)

## Prerequisites

_To use this application, you will need:_

1. Access to the Internet
(That should be easy. Who isn't online these days?)
2. A desktop computer, a tablet, or a laptop computer

(Sorry, this application is not mobile-friendly...yet.
_Though, in truth, phones and cooking are not a good mix..._
I am doing this for the best interest of your mobile device,
specifically its screen and its not-so-kitchen-proof state.)

3. A craving or interest in food

(_I know watching the images change can be weirdly mesmerizing...I know I stared at them quite a lot too._  
BUT if you just want to check out the application without any food in mind, I don't mind at all.
I would appreciate it actually, since many hours and days were spent developing the application,
curating the images, making the components work, making the application look okay, making everything break (with only the smallest of mental breakdowns), and having everything come together at the end relatively okay)

## [[Food Hunt Manual]]

 When you click on the url to the web application, you should be redirected to the landing page of the application.

### [Landing Page]

This application was designed with fancy cookbooks and food magazines in mind.
The use of minimal color throughout much of the application was intentional in order to draw users' attention to the images and the link to the homepage. The images on this page and all the others were meant to encourage ideas or thoughts of cooking or food - courtesy of my curated image collections on Unsplash.

_Did you notice how the text brings to mind a bowl? I hope you did, because I thought it was a nice touch._

### [Home Page/Recipe Finder (using the third-party Edamam API)]

Input whatever food you would like to cook. Edamam API even has some Spanish recipes, so try testing out some Spanish words in the input. Be as random as you would like. You never know, Edamam may actually be able provide your stomach's desire. If you do not have anything in mind, let the images entice or inspire you to hunger.

While there are no recipes on the page, the current mood will remain "hungry". If your search term yields results courtesy of the Edamam API, recipe cards will appear on the page on the right side rather than the images. The current mood indicator will change to reflect the appearance of recipe results.

**Unfortunately, the use of API limits the functionality of this part of the application. The Edamam API has a rate limit of 5 searches per minute with 5,000 API calls a month.** With that in mind and because not everyone is interested in cooking or should be cooking at all, I created the Hangry feature component.

A link is available in the navigation bar to redirect the user to the Hangry component. Additionally, if the user is limited by the EDAMAM API or if the user just cannot find a recipe that appeals by the third search, then a link will appear to encourage the user not to get frustrated with the recipe search and to allow the user to be redirected to the Hangry feature component.

### [Hangry Page/Restaurant Finder (using the third-party Yelp Fusion API)]

Input a food term or possibly a restaurant name in the search and see what the Yelp Fusion API has to offer.

_If nothing is in the input, the default search will be pizza, because for those late nights coding and because I'm a New Yorker, pizza always hits the spot (unless you're lactose or gluten intolerant...but even then, go for pizza. It's worth it - I'm just kidding, just do a search on this page. **Put your health first.**)_

The travel itinerary indicator, like the Current Mood indicator for the recipe finder, will change according to the whether the search yields results.

Fortunately, the Yelp Fusion API is more forgiving when it comes to searches. **The Yelp Fusion API is limited to 5,000 API calls per 24 hours, which resets every midnight UTC.** _Your mission should you choose to accept it is to hit that 5,000 mark before midnight, just kidding! I do not need Yelp being mad at me. I depend on its services too much._ **Also, if your queries per second rate is too high, results may not appear (but Yelp does not specify the query per second rate limit - as far as I can tell anyway...so how fast is too fast & furious?).**

_Don't go too wild testing the limits, please._

### [About Page]

This page is pretty self-explanatory. It features a little about me and the backstory of this application. Enjoy!

## Built With

- React.js - Frontend JavaScript Library
- Edamam - Third Party API
- Yelp Fusion - Third Party API
- (Stress, A Deadline, Little Sleep, & A Lot of Searching - but what else is new?)

## Contributing

Connect with me on [LinkedIn](https://www.linkedin.com/in/judy-truong) if you are interested in collaborating or have any feedback for improving this application. I always aim to be learning, so I am happy to see what else is possible out there.

## Created By

Judy Truong

## ACKNOWLEDGEMENTS

THIS COULD NOT HAVE BEEN POSSIBLE WITHOUT THE SUPPORT AND ENCOURAGEMENT FROM:

MY COHORT AND INSTRUCTORS AT CUNY TECHWORKS

AND, OF COURSE,

EVERYONE WHO HAD SIMILAR QUESTIONS AND ROADBLOCKS BEFORE ME ON:
- GOOGLE
- STACK OVERFLOW
- YOUTUBE
- UDEMY

# May Your Next Craving Make You Think Of Food Hunt!
