// console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submited');
}

let form = document.querySelector('#ContactUs');

form.addEventListener('submit', handleSubmit);

///adding a compliment on mouseover of bike picture
element.addEventListener("mouseover", compliment);

function compliment() {
  MessageEvent ("You would be so good at mountain biking!");
}