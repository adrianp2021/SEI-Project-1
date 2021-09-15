# General Assembly - Project 1

## Overview

This was the first project for the GA Software Engineering Immersive course, where I used JavaScript for the first time.

![13B10997-0874-48A2-8487-E825DF1286EF](https://user-images.githubusercontent.com/83225952/128079151-677d6296-d12b-4ca4-99c6-f90e619e1358.jpeg)


## Brief

Within a timeframe of 8 days, I had to build a fully functional browser game with Vanilla JavaSript.

## Technologies used

- HTML5
- CSS3
- JavaScript (ES6)
- GitHub
- Git

## Snake

Snake is a childhood classic, and re-creating it provided me with the opportunity to cement my JavaScript skills and recreating the game was an excellent learning curve. The game will automatically start on the load page and once the snake dies, it can be brought back to life by pressing the Enter key. If it loses all 3 lives then it is game over.

## Deployment

The game has been deployed on Github and you can play it [here](https://adrianp2021.github.io/SEI-Project-1/) (please see a snippet below).

![snake snippet](https://user-images.githubusercontent.com/83225952/128087005-9b21ee3e-f5a6-4e8c-8f03-ec02e247dec1.gif)

## Process

- The first thing I did was to pseudocode everything and sketch all the functionalities inherent in the game so that I could reach an MVP (minimum viable product). Once this had been achieved, I created some Trello cards, where I distributed the workload accordingly, so I could leave some time for styling and bug fixing.

- To create the grid, I used a for loop iterator to create a div, for which I would add a class for each iteration to it and subsequently be appended to the grid. This would then be pushed into an empty array so I could keep track of them.

<img width="485" alt="Screenshot 2021-08-03 at 22 40 24" src="https://user-images.githubusercontent.com/83225952/128090037-b78a7e38-0ebb-47c2-a21c-59316ddcb646.png">

- To create the wall, I ran again a for loop iterator, using the value of the width of 50, which was added or substracted from various starting points; this would create the four walls surrounding the grid.

<img width="581" alt="Screenshot 2021-08-03 at 22 57 13" src="https://user-images.githubusercontent.com/83225952/128091724-a52727df-ea4b-44cc-b836-420941c8afd0.png">

- I worked out the snake direction, with the starting point to go down by default. 

<img width="232" alt="Screenshot 2021-08-03 at 23 07 58" src="https://user-images.githubusercontent.com/83225952/128092652-822701bb-9a4b-4d6a-87bb-c2216d851ca9.png">

- After console logging the keys pressed, I was able to identify the arrows and determine the logic behind the snake direction.

<img width="498" alt="Screenshot 2021-08-03 at 23 03 37" src="https://user-images.githubusercontent.com/83225952/128092287-39ed3cde-c82f-4f9f-802f-05b022487297.png">

- The game action included a setInterval in which the snake was being enabled by the user, to move across any direction, e.g., I used an if conditional which set the snakePosition variable to always start at 125 (top center of the grid). To move right, I used snakePosition++, to move left I used snakePosition--, to move down I used the snakePosition, adding the value of 50 of the width, and lastly, to move up, snakePosition - the width. 

<img width="609" alt="Screenshot 2021-08-03 at 23 50 09" src="https://user-images.githubusercontent.com/83225952/128096214-708f6f05-0212-4001-b034-b083b67de90a.png">


- Having created an empty array for a variable called "snake", I then further created a constant variable called "element" which would only be used as a parameter in the checkIfContainsCarrot function (should the snake run into an element containing the class .carrot, then the carrot would dissapear and the length of the snake would be shifted). 

<img width="416" alt="Screenshot 2021-08-03 at 23 39 31" src="https://user-images.githubusercontent.com/83225952/128095348-53474ed8-255f-4a10-a7f9-4cacb6458e68.png">


## Known errors or bugs

- If the snake moves in an opposite direction than the one it's currently going on, it wouldn't die (I suspect this is because I did not condition it to do so).

- I was not able within the timeframe to fix the restart game function.

## Challenges

- Without any experience whatsoever, this has been the most challenging part of the course; I was also happy to recreate a game of my childhood using JavaScript. The biggest challenges, however, were the logic behind the game action, where the snake would consume a carrot (making it grow by one div) and the second one was to make it die once it reached a border wall. 

## Wins 

- I got to tap into the logical thinking, planning process and bug fixing which was great.

- I had the opportunity to understand and appreciate the amazing work that is being accumulated within the industry.

## Key learnings

- I got to solidify some concepts of JavaScript, such as array methods and timers.

- Understanding myself, both in terms of weaknesses and strengths, and also when a break is required.

## Future Content

- Had there been more time, I would have loved to make the arrow buttons of the console functional as well.

- I would have introduced a start/stop option so that it would allow the user to either take a break or just stop the game.

- Adding a more responsive design.



