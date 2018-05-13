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

// Mask for forms
function mask(o, f){
	v_obj = o;
	v_fun = f;
    setTimeout("execmask()", 1);
}

function execmask(){
	v_obj.value=v_fun(v_obj.value);
}

// Pattern phone (11) 1111-1111
function phone(v){
	
	v=v.replace(/\D/g, ""); //Remove all the caracteres
	v=v.replace(/^(\d\d)(\d)/g, "($1) $2"); //Put the '()' between the first numbers
    v=v.replace(/(\d{4})(\d)/, "$1-$2"); //Put the '-' between fourth number and fifth number.
    return v;
}