// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
<script src="path/to/dayjs/dayjs.min.js"></script>

$(document).ready(function () {



var today = dayjs();
$('#currentDay').text(today.format('DD MM, YYYY'))
console.log(today)
// assign saveBtn click listener for user input
$(".saveBtn").on ("click", function () {
  console.log("hello")


  
  // What does `this` reference in the click listener
    // function?
var time = $(this).parent().attr("id");
var text = $(this).siblings(".description").val();




// Store a value in local storage
localStorage.setItem(time, text);
});



$("#hour-7 .description").val(localStorage.getItem("hour-7")); 
$("#hour-8 .descritpion").val(localStorage.getItem("hour-8")); 
$("#hour-9 .description").val(localStorage.getItem("hour-9")); 
$("#hour-10 .description").val(localStorage.getItem("hour-10")); 
$("#hour-11 .description").val(localStorage.getItem("hour-11")); 
$("#hour-12 .description").val(localStorage.getItem("hour-12")); 
$("#hour-13 .description").val(localStorage.getItem("hour-13")); 
$("#hour-14 .description").val(localStorage.getItem("hour-14")); 
$("#hour-15 .description").val(localStorage.getItem("hour-15")); 




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  const saveBtn = document.querySelector ("saveBtn");
  saveBtn.addEventListener("click", function() {
    const userInput = this.parentNode.querySelector(".description").value;
    const hour = this.parentNode.id.split("-")[1];
    localStorage.setItem(hour, userInput)
  });
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  const currentHour = dayjs().hour();
  const timeBlocks = document.querySelectorAll(".time-block");

  timeBlocks.forEach(function(timeBlock) {
  const hour = parseInt(timeBlock.getAttribute("id").split("-")[1]);

if(hour < currentHour) {
timeBlock.classList.add("past");
timeBlock.classList.remove("present", "future");
}
else if (hour = currentHour) {
timeBlock.classList.add("present");
timeBlock.classList.remove("past", "future");
}
else (hour > currentHour) {
  timeBlock.classList.add("future");
  timeBlock.classList.remove("past", "present");
}
}
  );

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  const saveData = localStorage.getItem("userInput");
if (saveData) {
  const inputs = JSON.parse(saveData);
  for (const id in inputs) {
    const input = document.getElementById(id);
    if (input) {
      input.value = inputs[id];
    }
  }
  
}






// TODO: Add code to display the current date in the header of the page.
//Display current date
const currentDate = new Date 
const header = document.querySelector("header");

header.innerHTML = `<h1>${currentDate.toDateString()}</h1>`;



