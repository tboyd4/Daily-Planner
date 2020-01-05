// this function will grab the current date using moment.js and display it bold in the header
function todayDate() {
  let todate = moment().format("LL");
  console.log(todate);
  $("#jumbo-date").text(todate);
}

todayDate();

// this function will grab the current time of day. It will be military time for ease of use later
function currentTime() {
  let theTime = moment().format("HH:mm");
  console.log(theTime);
}

currentTime();

//these three functions will set the background color of the input according to the time of day. Past, Present, Future

function thePast(classArg) {
  $("#" + classArg).addClass("bg-secondary");
  $("#" + classArg).addClass("text-white");
}

function thePresent(classArg) {
  $("#" + classArg).addClass("bg-primary");
  $("#" + classArg).addClass("text-white");
}

function theFuture(classArg) {
  $("#" + classArg).addClass("bg-success");
  $("#" + classArg).addClass("text-white");
}

thePast("nine-am");
thePresent("ten-am");
theFuture("twelve-pm");
