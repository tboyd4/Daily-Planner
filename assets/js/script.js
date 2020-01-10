// This will check for and load anything from local storage before we do anything else
function loadEvents() {
  $("#nine-am").val(localStorage.getItem("nine-am"));
  $("#ten-am").val(localStorage.getItem("ten-am"));
  $("#elev-am").val(localStorage.getItem("elev-am"));
  $("#twelve-pm").val(localStorage.getItem("twelve-pm"));
  $("#one-pm").val(localStorage.getItem("one-pm"));
  $("#two-pm").val(localStorage.getItem("two-pm"));
  $("#three-pm").val(localStorage.getItem("three-pm"));
  $("#four-pm").val(localStorage.getItem("four-pm"));
  $("#five-pm").val(localStorage.getItem("five-pm"));
}

loadEvents();

// this function will grab the current date using moment.js and display it bold in the header
function todayDate() {
  let todate = moment().format("LL");
  console.log(todate);
  $("#jumbo-date").text(todate);
}

todayDate();

// this function will grab the current time of day. It will be military time for ease of use later
function currentTime() {
  let theTime = moment().format("HH");
  console.log(theTime);

  return theTime;
}

currentTime();

//these three functions will set the background color and ability to type of the input according to the time of day.

function thePast(classArg) {
  $("#" + classArg).addClass("bg-secondary");
  $("#" + classArg).addClass("text-white");
  $("#" + classArg).attr("readonly", "readonly");
}

function thePresent(classArg) {
  $("#" + classArg).addClass("bg-primary");
  $("#" + classArg).addClass("text-white");
}

function theFuture(classArg) {
  $("#" + classArg).addClass("bg-success");
  $("#" + classArg).addClass("text-white");
}

// two arrays to help assign the backgrounds and properties of the time slots

var hourArray = ["nine-am", "ten-am", "elev-am", "twelve-pm", "one-pm", "two-pm", "three-pm", "four-pm", "five-pm"];
var testHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// this loop will test each time against the current time and use the functions to set those color codes and properties

for (var i = 0; i < hourArray.length; i++) {
  if (testHour[i] < currentTime()) {
    thePast(hourArray[i])
  } else if (testHour[i] === currentTime()) {
    thePresent(hourArray[i])
  } else if (testHour[i] > currentTime()) {
    theFuture(hourArray[i]);
  }
}


// function to save input value into local storage

function saveEvent() {
  let saveSlot = $("#" + this.value).val();
  console.log(saveSlot);
  localStorage.setItem(this.value, saveSlot);
}

// event listener for the save buttons

$(".btn").on("click", saveEvent);


