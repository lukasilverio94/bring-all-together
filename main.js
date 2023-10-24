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
const ulList = document.getElementById("list-content-user");
//get msg element, in case of dont type anything get a error:
const msg = document.querySelector(".msg-error");
//get clear button
const clearBtn = document.querySelector("#clear-btn");

//DATA for random phrases:
const motivationPhrases = [
  "Code your dreams into reality.",
  "Unlock the power of the web with code.",
  "The web is your canvas; code is your brush.",
  "Learn to build, create, and innovate online.",
  "Embrace the magic of web development.",
  "Every line of code is a step towards mastery.",
  "Websites are your playground; code is your toy.",
  "Craft your digital future with web development.",
  "Code your way to endless possibilities.",
  "Web development is your key to a digital world.",
];
//Add an event listener to the forms submit button
form.addEventListener("submit", submitEvent);

function submitEvent(event) {
  event.preventDefault(); //prevent the form from submitting

  //Get the selected option on the radio inputs:
  const selectedValue = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  ).value;

  const randomIndex = Math.floor(Math.random() * motivationPhrases.length); //Random Number to loop data

  const randomPhrase = motivationPhrases[randomIndex];
  console.log(randomPhrase);
  //update the paragraph (empty for now, until click Sign in button!)
  signInFeedBackText.textContent = `You will be a ${selectedValue}! ${randomPhrase}`;
}

//Add content by user:
buttonAddEl.addEventListener("click", () => {
  if (inputEl.value === "" || inputEl.value.length <= 2) {
    msg.classList.add("msg-error");
    inputEl.value = "";
    msg.innerHTML = "Please enter some valid content...";
    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${inputEl.value}`));
    ulList.appendChild(li);
  }
});

//clear field button
clearBtn.addEventListener("click", clearInput);

function clearInput() {
  inputEl.value = "";
  ulList.innerHTML = "";
}
