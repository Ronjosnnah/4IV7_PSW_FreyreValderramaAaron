function leerValores()
{
	var compra = parseFloat(document.getElementById("compra").value);
    var compra2 = document.getElementById("compra").value;
    var validar=/^[0-9.]+$/;
    
    

    //alert("LeerValores: "+pTotal);
    if (compra<0) 
    {
		alert("No puede poner numeros negativos")
	}
    
    else if(compra2==""){
		alert("Ingrese los datos");
    }
    
    else if(compra2.match(validar))
    {
        var descuento=(compra)*(0.15);
        var pTotal=compra-descuento;
        document.getElementById('total').textContent = "El total a pagar es de: "+pTotal+" pesos";
	}

    else
    {
		alert("Ingrese solo números!!!");
	}
       
}