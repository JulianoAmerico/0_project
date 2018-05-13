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

//Approvers form validation
function validateFormApprover(){
    var country = approverForm.country.value;
    var storeCode = approverForm.storeCode.value;
    var approverCode = approverForm.approverCode.value;
    var approverName = approverForm.approverName.value;
    var approverDate = approverForm.approverDate.value;

    // Country
    if(country == ""){ 
    	alert("O campo país deve ser preenchido");
    	approverForm.country.focus();
    	return false;  
    }

    // Store code
    if(storeCode == ""){ 
    	alert("O campo código de loja deve ser preenchido");
    	approverForm.storeCode.focus();
    	return false;  
    }

    // Approver code
    if(approverCode == ""){
    	alert("O campo código do aprovador deve ser preenchido");
    	approverForm.approverCode.focus();
    }

    // Approver name
    if(approverName == ""){ 
    	alert("O campo nome do aprovador deve ser preenchido");
    	approverForm.approverName.focus();
    	return false;  
    }

    // Approver Date
    if(approverDate == ""){ 
    	alert("O campo da data de aprovação deve ser preenchido");
    	approverForm.approverDate.focus();
    	return false;  
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

// Only integer numbers
function integer(v){
    v=v.replace(/\D/g, "");
}

// Pattern phone (11) 1111-1111
function phone(v){
	
	v=v.replace(/\D/g, ""); //Remove all the caracteres
	v=v.replace(/^(\d\d)(\d)/g, "($1) $2"); //Put the '()' between the first numbers
    v=v.replace(/(\d{4})(\d)/, "$1-$2"); //Put the '-' between fourth number and fifth number.
    return v;
}

// Date format
function date(v){
	v=v.replace(/\D/g,"");
	v=v.replace(/^([0-9]{2})(\d)/g,"$1/$2");
	v=v.replace(/(\d\d)([0-9]{2})/, "$1/$2");
	return v;
}

