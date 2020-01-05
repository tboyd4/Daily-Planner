// This will check for and load anything from local storage before we do anything else







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

// If Statement to assign color codes to inputs
// function setBackground() {
//   if (currentTime() === 9) {
    thePresent("nine-am");
    theFuture("ten-am");
    theFuture("elev-am");
    theFuture("twelve-pm");
    theFuture("one-pm");
    theFuture("two-pm");
    theFuture("three-pm");
    theFuture("four-pm");
    theFuture("five-pm");
//   } else if (currentTime() === 10) {
//     thePast("nine-am");
//     thePresent("ten-am");
//     theFuture("elev-am");
//     theFuture("twelve-pm");
//     theFuture("one-pm");
//     theFuture("two-pm");
//     theFuture("three-pm");
//     theFuture("four-pm");
//     theFuture("five-pm");
//   } else if (currentTime() === 11) {
//     thePast("nine-am");
//     thePast("ten-am");
//     thePresent("elev-am");
//     theFuture("twelve-pm");
//     theFuture("one-pm");
//     theFuture("two-pm");
//     theFuture("three-pm");
//     theFuture("four-pm");
//     theFuture("five-pm");
//   } else if (currentTime() === 12) {
//     thePast("nine-am");
//     thePast("ten-am");
//     thePast("elev-am");
//     thePresent("twelve-pm");
//     theFuture("one-pm");
//     theFuture("two-pm");
//     theFuture("three-pm");
//     theFuture("four-pm");
//     theFuture("five-pm");
//   } else if (currentTime() === 13) {
//     thePast("nine-am");
//     thePast("ten-am");
//     thePast("elev-am");
//     thePast("twelve-pm");
//     thePresent("one-pm");
//     theFuture("two-pm");
//     theFuture("three-pm");
//     theFuture("four-pm");
//     theFuture("five-pm");
//   } else if (currentTime() === 14) {
//     thePast("nine-am");
//     thePast("ten-am");
//     thePast("elev-am");
//     thePast("twelve-pm");
//     thePast("one-pm");
//     thePresent("two-pm");
//     theFuture("three-pm");
//     theFuture("four-pm");
//     theFuture("five-pm");
//   } else if (currentTime() === 15) {
//     thePast("nine-am");
//     thePast("ten-am");
//     thePast("elev-am");
//     thePast("twelve-pm");
//     thePast("one-pm");
//     thePast("two-pm");
//     thePreset("three-pm");
//     theFuture("four-pm");
//     theFuture("five-pm");
//   } else if (currentTime() === 16) {
//     thePast("nine-am");
//     thePast("ten-am");
//     thePast("elev-am");
//     thePast("twelve-pm");
//     thePast("one-pm");
//     thePast("two-pm");
//     thePast("three-pm");
//     thePresent("four-pm");
//     theFuture("five-pm");
//   } else if (currentTime() === 17) {
//     thePast("nine-am");
//     thePast("ten-am");
//     thePast("elev-am");
//     thePast("twelve-pm");
//     thePast("one-pm");
//     thePast("two-pm");
//     thePast("three-pm");
//     thePast("four-pm");
//     theFuture("five-pm");
//   } else if (currentTime() < 9 || currentTime() > 17) {
//     thePast("nine-am");
//     thePast("ten-am");
//     thePast("elev-am");
//     thePast("twelve-pm");
//     thePast("one-pm");
//     thePast("two-pm");
//     thePast("three-pm");
//     thePast("four-pm");
//     thePast("five-pm");
//   }
// }

// setBackground();

// function to save input value into local storage

function saveEvent (timeSlot) {
    let saveSlot = $("#"+timeSlot).val();
    console.log(saveSlot);
    localStorage.setItem(timeSlot, saveSlot);
}

// event listeners for the save buttons

$("#nine-btn").on("click", function () {
    saveEvent("nine-am");
});
$("#ten-btn").on("click", function () {
    saveEvent("ten-am");
});
$("#elev-btn").on("click", function () {
    saveEvent("elev-am");
});
$("#twelve-btn").on("click", function () {
    saveEvent("twelve-pm");
});
$("#one-btn").on("click", function () {
    saveEvent("one-pm");
});
$("#two-btn").on("click", function () {
    saveEvent("two-pm");
});
$("#three-btn").on("click", function () {
    saveEvent("three-pm");
});
$("#four-btn").on("click", function () {
    saveEvent("four-pm");
});
$("#five-btn").on("click", function () {
    saveEvent("five-pm");
});
