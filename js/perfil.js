$(document).ready(function(){
    $("#open-hide").click(function() {
      $("#menu").toggleClass("show");
      $("#content").toggleClass("open-menu");
    });

  //var cont = localStorage.getItem('contador');
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
     localStorage.setItem(cont, numero);
     $("#tarjeta-input").val("");
    }
  });

    for(var i = 0; i < localStorage.length; i++){
      var regexStorage = new RegExp("^([0-9]{8})$");
      var kei = localStorage.key(i);
      var valuee = localStorage.getItem(kei);
      if(regexStorage.test(valuee)){
        $(".tarjetas-guardadas").append("<div class='num-area'><p id='num"+kei+"'>"+valuee+"</p></div>");
      }
      
    }

/*  $(document).keypress(function(e){
   
    if(e.which == 13) {
       e.preventDefault();
      var name = $("#tarea-nueva").val();
      if(name == ""){
		    alert("Debes escribir la tarea");
	    }else{
	    	$("#lista").append("<div class='task-area'><input type='checkbox' id='test" + cont +"'/><label for='test" + cont + "'>" + "<p>" + name +"</p>" + "</label><button class='remove'><i class='fa fa-trash' aria-hidden='true'></i></button></div>");
	    	cont++;
        console.log(cont);
        localStorage.setItem(cont, name);
        $("#tarea-nueva").val("");
	    }
    }
  });

  $('#lista').on("change", ":checkbox", function () {
      if (this.checked) {
      	var ide = this.id;
          console.log(this.id + ' is checked  ');
          $(this).parent().appendTo("#completed");
          //$("#completed").append($(this).parent().clone());
          //$(this).parent().empty();

      } else {
          console.log(this.id + ' is unchecked');
      }
  });
  $('#completed').on("change", ":checkbox", function () {
      if (this.checked) {
        var ide = this.id;
          console.log(this.id + ' is checked  ');
          //$("#completed").append($(this).parent().clone());
          //$(this).parent().empty();

      } else {
          console.log(this.id + ' is unchecked');
          $(this).parent().appendTo("#lista");
      }
  });


  $(document).on("click", ".remove",function(){
    $(this).parent().empty();
    //localStorage.clear();
  });

    //efectos del input
  $(".mat-input").focus(function(){
    $(this).parent().addClass("is-active is-completed");
  });

  $(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
    $(this).parent().removeClass("is-active");
  });

$(document).on("click", ".clear",function(){
    localStorage.clear();
    $('.task-area').empty();
  });


  for(var i = 0; i < localStorage.length; i++){
    var kei = localStorage.key(i);
    var valuee = localStorage.getItem(kei);
    $("#lista").append("<div class='task-area'><input type='checkbox' id='test" + kei +"'/><label for='test" + kei + "'>" + "<p>" + valuee +"</p>" + "</label><button class='remove'><i class='fa fa-trash' aria-hidden='true'></i></button></div>"); 
  }*/
});