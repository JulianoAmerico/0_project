// Author: Juliano Américo
// Description: JS for validation forms

// Login validation
function validateForm(){
	var x = document.forms["loginForm"]["login"].value;
	var y = document.forms["loginForm"]["password"].value;
	if(x == "" || y == ""){
		alert("Os campos devem ser preenchidos");
	}
}