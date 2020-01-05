// this function will grab the current date using moment.js and display it bold in the header
function todayDate() {
  let todate = moment().format("LL");
  console.log(todate);
  $("#jumbo-date").text(todate);
}

todayDate();

// this function will grab the current time of day. It will be military time for ease of use later
function currentTime() {
    let theTime = moment().format("HH:mm")
    console.log(theTime);
}

currentTime();
