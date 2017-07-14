$(document).ready(function(){


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