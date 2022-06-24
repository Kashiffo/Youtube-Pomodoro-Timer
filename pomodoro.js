//get elementsand store in var
let counter = document.getElementById("counter");
let workMinutes = document.getElementById("w_minutes");
let workSeconds = document.getElementById("w_seconds");
let breakMinutes = document.getElementById("b_minutes");
let breakSeconds = document.getElementById("b_seconds");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let pause = document.getElementById("stp");
//store a reference to a timer variable
let startTimer;

//add event listens to each button
//start
start.addEventListener("click", function () {
  //Start Timer Function

  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000) && onYouTubePlayerAPIReady();
  } else {
    alert("yerrr");
  }
  //player.playVideo();
  // we need to run the timer() once ever second
  //add what happens when button is clicked
});

//reset
reset.addEventListener("click", function () {
  //add what happens when button is clicked
  //Reset Timer Function
  workMinutes.innerText = 25;
  workSeconds.innerText = "00";
  breakMinutes.innerText = 5;
  breakSeconds.innerText = "00";
  stopInterval();
});

//stop
pause.addEventListener("click", function () {
  //add what happens when button is clicked
  //Stop Timer Function
  stopInterval();
});

//create teh functions for types of timers
//start timer function
function timer() {
  //Work Timer Countdown
  //what happens to the timer
  //if secs are not 0 then decrease value in seconds html by 1
  if (workSeconds.innerText != 0) {
    workSeconds.innerText--;
  } else if (
    //else if mins are not 0&&secs are 0 then decrease value in mins html by 1 && set secs == 59
    workMinutes.innerText != 0 &&
    workSeconds.innerText == 00
  ) {
    workSeconds.innerText = 59;
    workMinutes.innerText--;
  }

  //Break Timer Countdown
  //what happens to the timer
  //
  //if secs are not 0 then decrease value in seconds html by 1
  if (workMinutes.innerText == 0 && workSeconds.innerText == 0) {
    if (breakSeconds.innerText != 0) {
      breakSeconds.innerText--;
    }
  } else if (
    workMinutes.innerText == 0 &&
    workSeconds.innerText == 0 &&
    //else if mins are not 0&&secs are 0
    breakMinutes.innerText != 0 &&
    breakSeconds.innerText == 0
  ) {
    //then decrease value in mins html by 1 && set secs == 59
    breakMinutes.innerText--;
    breakSeconds.innerText = 59;
  }

  //cycles , keeping track of how many times a work/break occurs
  // if work timers and break timer ==0
  if (
    workMinutes.innerText == 0 &&
    workSeconds.innerText == 0 &&
    breakMinutes.innerText == 0 &&
    breakSeconds.innerText == 0
  ) {
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";
    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";
    counter.innerText++;
  }
  // if work timers and break timer seconds are less than 10 display double digets

  if (workSeconds.innerText < 10) {
    workSeconds.innerText = `0${workSeconds.innerText}`;
  }
  if (workSeconds.innerText == 0) {
    workSeconds.innerText = "00";
  }
  if (breakSeconds.innerText < 10) {
    breakSeconds.innerText = `0${breakSeconds.innerText}`;
  }
  if (breakSeconds.innerText == 0) {
    breakSeconds.innerText = "00";
  }
  // add in cyclical long break feature

  if (counter.innerText == 3) {
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";
    breakMinutes.innerText = 15;
    breakSeconds.innerText = "00";
  }

  //stop timer function
  function stopInterval() {
    clearInterval(startTimer);
    startTimer = undefined;
  }
}

// Youtube Player Lofi

var info = document.getElementById("info");
function onYouTubePlayerAPIReady() {
  var player = new YT.Player("player", {
    videoId: "7cO1GvCNOOQ", // this is the id of the video at youtube (the stuff after "?v=")
    loop: true,
    events: {
      onReady: function (e) {
        info.innerHTML = "video is loaded"; // checks the state
        e.target.playVideo();
      },
      onStateChange: function (event) {
        if (event.data === 1) {
          info.innerHTML = "video started playing";
        }
      },
    },
  });
  // you can do more stuff with the player variable
}

// Youtube Player Rap

// you can do more stuff with the player variable
