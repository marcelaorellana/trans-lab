$(document).ready(function(){
  //Menú lateral
  $("#open-hide").click(function() {
    $("#menu").toggleClass("show");
    $("#content").toggleClass("open-menu");
  });

  //pone el mail guardado en local storage en el perfil
  var mail = localStorage.getItem("email");
  $("#text-email").text(mail);

//guarda numero de tarjetas
  var cont = localStorage.length;
  if (cont === null) {
    cont = 1;
  } 
  $("#boton-tarjetas").on("click", function(e){
    var numero = $("#tarjeta-input").val();
    var regexNum = new RegExp("^([0-9]{8})$");

    if(!regexNum.test(numero) || numero == ""){
    
       $(".malo").show();
    }else{
     $(".malo").hide();
     $(".tarjetas-guardadas").append("<div class='num-area'><p id='num"+cont+"'>"+numero+"</p></div>");
     cont++;
     localStorage.setItem("bip"+cont, numero);
     $("#tarjeta-input").val("");
    }
  });

//escribe los numeros de tarjetas al recargar
  for(var i = 0; i < localStorage.length; i++){
    var regexStorage = new RegExp("^([0-9]{8})$");
    var kei = localStorage.key(i);
    var valuee = localStorage.getItem(kei);
    if(kei.startsWith("bip")){
      $(".tarjetas-guardadas").append("<div class='num-area'><p id='num"+kei+"'>"+valuee+"</p></div>");
    }
    
  }

});