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
function validateApproverForm(){
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
    	return false;
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

// Client form validation
function validateClientForm(){
	var country = clientForm.country.value;
    var storeCode = clientForm.storeCode.value;
    var cnpj = clientForm.cnpj.value;
    var fantasyName = clientForm.fantasyName.value;
    var socialReason = clientForm.socialReason.value;
    var address = clientForm.address.value;
    var numberAddress = clientForm.numberAddress.value;
    var complement = clientForm.complement.value;
    var cep = clientForm.cep.value;
    var neighbourhood = clientForm.neighbourhood.value;
    var city = clientForm.city.value;
    var state = clientForm.state.value;
    var emailComercial = clientForm.emailComercial.value;
    var emailTi = clientForm.emailTi.value;
    var comercialName = clientForm.comercialName.value;
    var TiName = clientForm.TiName.value;
    var comercialFone = clientForm.comercialFone.value;
    var TiFone = clientForm.TiFone.value;
    var site = clientForm.site.value;
    var cnpjMatriz = clientForm.cnpjMatriz.value;

    // Country
    if(country == ""){ 
    	alert("O campo país deve ser preenchido");
    	clientForm.country.focus();
    	return false;  
    }

    // Store code
    if(storeCode == ""){ 
    	alert("O campo código de loja deve ser preenchido");
    	clientForm.storeCode.focus();
    	return false;  
    } 

    // CNPJ
    if(cnpj == ""){ 
    	alert("O campo cnpj deve ser preenchido");
    	clientForm.cnpj.focus();
    	return false;  
    }

    // Fantasy name
    if(fantasyName == ""){ 
    	alert("O campo nome fantasia deve ser preenchido");
    	clientForm.fantasyName.focus();
    	return false;  
    }

    // Social reason
    if(socialReason == ""){ 
    	alert("O campo razáo social deve ser preenchido");
    	clientForm.socialReason.focus();
    	return false;  
    }

    // Address
    if(address == ""){ 
    	alert("O campo endereço deve ser preenchido");
    	clientForm.address.focus();
    	return false;  
    } 

    // Number address
    if(numberAddress == ""){ 
    	alert("O campo número deve ser preenchido");
    	clientForm.numberAddress.focus();
    	return false;  
    }

    // complement 
    if(complement == ""){ 
    	alert("O campo complemento deve ser preenchido");
    	clientForm.complement.focus();
    	return false;  
    }

    // CEP
    if(cep == ""){ 
    	alert("O campo CEP deve ser preenchido");
    	clientForm.cep.focus();
    	return false;  
    }

    // Neighbourhood
    if(neighbourhood == ""){ 
    	alert("O campo bairro deve ser preenchido");
    	clientForm.neighbourhood.focus();
    	return false;  
    }  
    // City
    if(city == ""){ 
    	alert("O campo cidade deve ser preenchido");
    	clientForm.city.focus();
    	return false;  
    }

    // State
    if(state == ""){ 
    	alert("O campo Estado deve ser preenchido");
    	clientForm.state.focus();
    	return false;  
    }

    // Email comercial
    if(emailComercial == ""){ 
    	alert("O campo email comercial deve ser preenchido");
    	clientForm.emailComercial.focus();
    	return false;  
    } 

    // Email TI
    if(emailTi == ""){ 
    	alert("O campo email TI deve ser preenchido");
    	clientForm.emailTi.focus();
    	return false;  
    }

    // Comercial name
    if(comercialName == ""){ 
    	alert("O campo comercial deve ser preenchido");
    	clientForm.comercialName.focus();
    	return false;  
    }

    // TI Name
    if(TiName == ""){ 
        alert("O campo nome TI deve ser preenchido");
        clientForm.TiName.focus();
        return false;  
    }

    // Comercial Fone
    if(comercialFone == ""){ 
    	alert("O campo telefone comercial deve ser preenchido");
    	clientForm.comercialFone.focus();
    	return false;  
    }

    // TI Fone
    if(TiFone == ""){ 
    	alert("O campo telefone TI deve ser preenchido");
    	clientForm.TiFone.focus();
    	return false;  
    }

    // site
    if(site == ""){ 
    	alert("O campo site deve ser preenchido");
    	clientForm.site.focus();
    	return false;  
    }

    // CNPJ Matriz
    if(cnpjMatriz == ""){ 
    	alert("O campo cnpj matriz deve ser preenchido");
    	clientForm.cnpjMatriz.focus();
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

// Patter CNPJ XX.XXX.XXX/XXXX-XX
function cnpjFunc(v){
    v=v.replace(/\D/g, ""); //Remove all the caracteres
    v=v.replace(/^([0-9]{2})(\d)/g,"$1.$2");
    v=v.replace(/([0-9]{3})(\d)/, "$1.$2");
    v=v.replace(/([0-9]{3})(\d)/, "$1/$2");
    v=v.replace(/([0-9]{4})(\d\d)/, "$1-$2");
    return v;
}

// Date format
function date(v){
	v=v.replace(/\D/g,"");
	v=v.replace(/^([0-9]{2})(\d)/g,"$1/$2");
	v=v.replace(/(\d\d)([0-9]{2})/, "$1/$2");
	return v;
}

