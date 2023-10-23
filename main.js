// Showing at a text which path the developer choose: (fullstack or frontend)
//get form element
const form = document.getElementById("form");
//sign in feedback element
const signInFeedBackBtn = document.getElementById("sign-in-feedback");
//get tag to change text
const signInFeedBackText = document.querySelector(".sign-in-text");

//Elements to add content by user:
//get input to add content (type text)
const inputEl = document.getElementById("input-add-content");
//get button to add content
const buttonAddEl = document.querySelector(".add-content-btn");
//get ul element to render
const ul = document.getElementById("list-content-user");


//Add an event listener to the forms submit button
form.addEventListener("submit", submitEvent);

function submitEvent(event) {
  event.preventDefault(); //prevent the form from submitting

  //Get the selected option on the radio inputs:
  const selectedValue = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  ).value;

  //update the paragraph (empty for now, until click Sign in button!)
  signInFeedBackText.textContent = `You choose to become a ${selectedValue}. Good Luck at the journey!`;
}


//Add content by user:
