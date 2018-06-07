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
Displayed in a single page, with a heading, the main game section with the 4 colour buttons and a message section, and a row at the bottom to display level, scoring, and instructions. Also included media queries to scale to different screen sizes.

### Functions:
#### *Generating Computer Move*
Generating a random choice from the 4 options, and pushing it to an array. Displaying the array using jQuery to add classes to the buttons and remove them in intervals.

#### *Player Input*
Creating an on-click event to collect the player's input and push it to an array.

#### *Compare Computer v Player*
Comparing the 2 arrays and if correct, move to the next level, or the game is won if all levels completed. If incorrect, option to restart the game.

#### *Levels*
The game starts from a sequence of length 1 (except when on higher difficulty). Each level thereafter, the computer generates further random choices and adds them to the end of the array. Continues until a level of 15. Could potentially continue this indefinitely and introduce highscores/leaderboards.

#### *Difficulties*
Added difficulties of easy, medium and hard. The player can choose the difficulty. Increasing the difficulty increases the speed at which the sequence is displayed. The highest difficulty also increases the length of the sequence by 2 each time instead of 1. Increased difficulty also results in higher scores.

Now added a further difficulty of reverse. In this the player has to put each sequence in backwards. We compare the player array and the reverse of the computer array to check if correct.

#### *Scoring*
The scoring works so that after each correct sequence, the player earns points depending on the difficulty and the level as follows:
* **Easy** - points equivalent to the current level number
* **Medium** - double points
* **Hard** - triple points
* **Reverse** - triple points

The score is shown at all times, the final score being confirmed when the game ends.

#### *Instructions*
Created a modal to display instructions. Still to expand on the instructions to explain different difficulties/modes.

#### *Sound Effects*
Added sounds when moving up a level, when player makes a mistake, and when player wins.
