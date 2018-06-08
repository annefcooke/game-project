$(document).ready(function(event) {

  //adding game as an object
  var game = {
  count: 0,
  optionsArray: ['#red','#green', '#yellow', '#blue'],
  compArray: [],
  playerArray: [],
  playerScore: 0,
  highScore: 0,
  strict: false,
  }
  //setting default speed settings to 'easy'
  var intervalSpeed = 600;
  var removeSpeed = 400;

  //on-click events to set difficulty/speeds
  $('#easy').click(function functionName() {
    intervalSpeed = 600;
    removeSpeed = 400;
    selectedButton($(this));
  })
  $('#difficult').click(function functionName() {
    intervalSpeed = 250;
    removeSpeed = 150;
    selectedButton($(this));
  })
  $('#double').click(function functionName() {
    intervalSpeed = 280;
    removeSpeed = 180;
    selectedButton($(this));
  })
  $('#reverse').click(function functionName() {
    intervalSpeed = 280;
    removeSpeed = 180;
    selectedButton($(this));
  })

  //function for changing class of mode buttons
  function selectedButton(difficultySelector){
    $('#easy').removeClass('selected');
    $('#difficult').removeClass('selected');
    $('#double').removeClass('selected');
    $('#reverse').removeClass('selected');
    $('.start-button').html('Start');
    $(difficultySelector).addClass('selected');
  }

  //start button click event
  $('.start-button').click(function() {
    newGame();
  })

  //new game resets level and scores and sequence array, and calls for new sequence.
  function newGame() {
    game.compArray = [];
    game.playerScore = 0;
    game.count = 0;
    game.count +=1;
    $('.level').html(game.count);
    $('.start-button').html(' ');
    generateSequence();
  }

  //Computer generates a random choice from the 4 options in the option array. This pushes the choice to the end of the current computer array. Then goes through each item in the array at set intervals until reaching end of the array.
  function generateSequence() {
    game.compArray.push(game.optionsArray[Math.floor(Math.random()*4)]);
    if ($('#double').hasClass('selected')) {
      game.compArray.push(game.optionsArray[Math.floor(Math.random()*4)]);
    }
    console.log(game.compArray);
    var i = 0;
    setInterval(function() {
      displayArray(game.compArray[i]);
      i+=1;
      if (i>=game.compArray.length) {
        clearInterval();
      }
    }, intervalSpeed)
    game.playerArray = [];
  }

  //Adds and removes the class of 'chosen' to display the computer array.
  function displayArray(index) {
    $(index).addClass('chosen');
    setTimeout(function() {
      $(index).removeClass('chosen');
    }, removeSpeed)
  }

  //click event for the 4 game buttons. Pushes the id to the playerArray. Also adds and removes class of 'chosen'.
  $('.button').click(function() {
    var element = "#"+this.id;
    game.playerArray.push(element);
    if ($('#reverse').hasClass('selected')) {
      compareReverse(this);
    } else {
      compareArrays(this);
    }
    $(this).addClass('chosen');
    setTimeout(function() {
      $('.button').removeClass('chosen');
    }, 150)
  })

  //Comparing computer array and player array and calls relevant function
  function compareArrays(x) {
    if (game.playerArray[game.playerArray.length - 1] !== game.compArray[game.playerArray.length - 1]) {
      lose();
    } else {
      correct();
    }
  }

  //comparing arrays - same as above but for reverse mode.
  function compareReverse(x) {
    if (game.playerArray[game.playerArray.length - 1] !== game.compArray.slice().reverse()[game.playerArray.length - 1]) {
      lose();
    } else {
      correct ();
    }
  }

  //displays score and option to restarts
  function lose() {
    $('#negative')[0].play();
    $('.start-button').html('Oops! You scored '+game.playerScore+ '.');
    setTimeout(function() {
      $('.start-button').html('Try Again');
    }, 2000)
  }

  //sets and displays score, highscore, and moves to next level, or if all levels compete player wins.
  function correct() {
    if (game.playerArray.length === game.compArray.length) {
      if ($('#easy').hasClass('selected')) {
        game.playerScore += game.compArray.length;
      } else if ($('#difficult').hasClass('selected')) {
        game.playerScore += (game.compArray.length)*2;
      } else {
        game.playerScore += (game.compArray.length)*3;
      }
      $('.score').html(game.playerScore);
      if (game.playerScore > game.highScore) {
      game.highScore = game.playerScore;
      }
      $('.highscore').html(game.highScore);
      if(game.count == 15){
        $('#win')[0].play();
        $('.start-button').html('Complete! You scored the top score of '+game.playerScore+'!');
        setTimeout(function() {
          $('.start-button').html('New Game');
        }, 2000)
      } else {
        $('#positive')[0].play();
        game.count +=1;
        $('.level').html(game.count);
        $('.start-button').html(' ');
        setTimeout(function() {
          generateSequence();
        }, 240)
      }
    }
  }

  // get the modal, button for modal, and close button:
  var modal = document.getElementById('myModal');
  var btn = document.getElementById("instructions");
  var span = document.getElementsByClassName("close")[0];

  // on-click events for the modal:
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }

});
