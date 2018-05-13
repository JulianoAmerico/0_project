// Author: Juliano Américo
// Description: JS for validation forms

function validateForm(){
	var x = document.forms["loginForm"].value;
	var y = document.forms["loginForm"].value;
	if(x == "" || y == ""){
		alert("Os campos devem ser preenchidos");
	}
}