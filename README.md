# Simon Says game

## Project - Browser based game made using HMTL, CSS and javascript

### Minimum objectives of the task:
* Build a browser based game made using HMTL, CSS and javascript.
* Include an instruction section explaining how to play the game.
* Ether display a message when the user has won or display the users score after the game has finished.
* Be styled to perfection.
* Be hosted online.

## Progress:

### Main layout and basic styling:
Displayed in a single page, with a heading, the main game section with the 4 colour buttons and a message section, and a row at the bottom to display level, scoring, and instructions. Also included media queries.

### Functions:
#### *Generating Computer Move*
Generating a random choice from the 4 options, and pushing it to an array. Displaying the array using jquery to add classes to the buttons in intervals.

#### *Player Input*
Creating an on-click event to collect the player's input and push it to an array.

#### *Compare Computer v Player*
Comparing the 2 arrays and if correct, move to the next level.

#### *Levels*
The game starts from a sequence of length 1. Each level thereafter, the computer generates a further random choice and adds it to the end of the array. Continues until a level of 15.

#### *Scoring*
The scoring works so that after each complete level, the player earns points equivalent to their level number squared. The score is shown at all times and when the game ends, the player's final score is confirmed.

#### *Sound Effects*
Still to add.
