# Simon Says game

## Project - Browser based game made using HMTL, CSS and javascript

### How to Use:
* Go to https://github.com/annefcooke/game-project.
* Click 'Clone or Download' and then 'Download Zip'.
* Double click the file index.html to open in your browser.

### Minimum objectives of the task:
* Build a browser based game made using HMTL, CSS and javascript.
* Include an instruction section explaining how to play the game.
* Ether display a message when the user has won or display the users score after the game has finished.
* Be styled to perfection.
* Be hosted online.

## Progress:

### Main layout and basic styling:
Displayed in a single page, with a modal for instructions. Also included media queries to scale to different screen sizes.

### Functions:
#### *Generating Computer Move*
Generating a random choice from the 4 options, and pushing it to an array. Displaying the array using intervals to add classes to the buttons.

#### *Player Input*
Creating an on-click event to collect the player's input and push it to an array.

#### *Compare Computer v Player*
Comparing the 2 arrays and if correct, move to the next level, or the game is won if all levels completed. If incorrect, option to restart the game.

#### *Levels*
The game starts from a sequence of length 1 (except when on higher difficulty). Each level thereafter, the computer generates further random choices and adds them to the end of the array. Continues until a level of 15. Could potentially continue this indefinitely and introduce highscores/leaderboards.

#### *Game Modes*
Added game modes of easy, difficult and double. The player can choose the difficulty.
* **Easy** - slow
* **Difficult** - fast
* **Double** - sequence increases by 2 each time
* **Reverse** - player has to input sequence backwards

Had difficulty implementing the check for win condition for 'reverse' using the function reverse() on the computer array. First have to splice() the array and then reverse() so that the original is not affected.

#### *Scoring*
The score is shown at all times, the final score being confirmed when the game ends.
* **Easy** - points equivalent to the current level number
* **Difficult** - double points
* **Double** - triple points
* **Reverse** - triple points

#### *Sound Effects*
Added sounds when moving up a level, when player makes a mistake, and when player wins.
