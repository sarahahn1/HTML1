console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("your form has been submitted")
	// console.log('form submit');
}

let form = document.querySelector('#contact');
let image = document.getElementById('the-page-image')

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', handleMouseOver)

