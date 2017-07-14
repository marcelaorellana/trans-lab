$(document).ready(function(){
  //Menú lateral
  $("#open-hide").click(function() {
    $("#menu").toggleClass("show");
    $("#content").toggleClass("open-menu");
  });


$("#tarifa-elegir").on("change", function(){
	$("#input-tarifa").prop('disabled', true);
	$("#input-tarifa").val("");
});
$("#boton-tarifa").on("click", function(e){
	var tarjInput = $("#input-tarifa").val();
	var tarjSelect = $("#tarifa-elegir").val();
	var tarifa = parseInt($("#tarifaId").val());
	var valor = "";

	if((tarjInput != "" || tarjSelect != null) && tarifa != null){
		if(tarjInput == ""){
			valor = $("#tarifa-elegir").val();
		}else{
			valor = $("#input-tarifa").val();
		}

		$.ajax({
			url : 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json',
			type : 'GET',
			datatype : 'json',
			data : {'bip': valor}
		})
		.done(function(respuesta){
			console.log("successe");
			console.log(respuesta);
			verSaldo(respuesta);
		})
		.fail(function(){
			console.log("error");
			malSaldo();
		})

	}else{
		alert("seleccione tarjta y tarifa");
	}

	function verSaldo(bip){
		var saldo = bip.saldoTarjeta;
		var saldoNum = saldo.split('$')[1];
		var saldoFinal = saldoNum - tarifa;

		$(".tu-tarifa").empty();


		texto1 = ("<h3>COSTO PASAJE</h3><div class='saldo'><p id='saldo-final'>"+tarifa+"</p></div>");
		texto2 = ("<h3>SALDO FINAL</h3><div class='saldo'><p id='saldo-final'>"+saldoFinal+"</p></div>");

		$(".tu-tarifa").append(texto1);
		$(".tu-tarifa").append(texto2);
		
	}
	function malSaldo(){
		$(".tu-tarifa").empty();
		$(".tu-tarifa").append("<h3>SALDO TOTAL</h3><div class='saldo'><p id='saldo-final'>Tarjeta No válida</p></div>")
		
	}

});
  


  


});