$(document).ready(function(){
	/*$(document).on('keypress', '#datos-nombre', function (event) {
	    var regex = new RegExp("^[a-zA-Z ]+$");
	    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	    if (!regex.test(key)) {
	        event.preventDefault();
	        return false;
	    }
	});
//solo acepta letras numeros @ y .
$(document).on('keypress', '#datos-email', function (event) {
    var regex = new RegExp("^[a-z0-9@.]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#malo1").hide();
$("#malo2").hide();
$("#malo3").hide();
*/

$("#linkInicio").on("click", function(e){

    var email = $("#email").val();
    var pass = $("#password").val();

    var regexEmail = new RegExp("^[a-z0-9@.]+$");
    var regexPass = new RegExp("^([0-9]{1,8})$");

    if(!regexEmail.test(email) || email.indexOf('@') == -1 || email == ""){
        $("#malo1").show();
    }else{
     $("#malo1").hide();
    }
    if(!regexPass.test(pass) || pass == ""){
    	
        $("#malo2").show();
    }else{
    	
        $("#malo2").hide();
    }
    

    if(regexEmail.test(email) && email.indexOf('@') != -1 && email != "" && regexPass.test(pass) && pass != ""){
        localStorage.setItem("email", email);
        
    }else{
        e.preventDefault();
    }
});
});