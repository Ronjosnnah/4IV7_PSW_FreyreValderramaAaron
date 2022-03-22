function leerValores()
{

    var sBase = parseFloat(document.getElementById("dinero").value);
    var v1 = parseFloat(document.getElementById("venta1").value);
    var v2 = parseFloat(document.getElementById("venta2").value);
    var v3 = parseFloat(document.getElementById("venta3").value);
    var sBase2 = document.getElementById("dinero").value;
    var v12 = document.getElementById("venta1").value;
    var v22 = document.getElementById("venta2").value;
    var v32 = document.getElementById("venta3").value;
    var cVentas = (v1+v2+v3) * (0.10);
    var sTotal = sBase + cVentas
    var validar = /^[0-9.]+$/;

    if (sBase<0 || v1<0 || v2<0 || v3<0   )
    {
		alert("No puede poner numeros negativos")	
	}

    else if(sBase2=="" || v12=="" || v22=="" || v32==""){
		alert("Inrese los datos");
	}

    else if(sBase2.match(validar) && v12.match(validar) && v22.match(validar) && v32.match(validar))
    {
		var cVentas=(v1+v2+v3)*(0.10);
        var sTotal=sBase+cVentas;
        document.getElementById('comision').textContent = "Recibió de comisión por venta: "+cVentas+" pesos";
        document.getElementById('pago').textContent = "Su pago del mes será de: "+sTotal+" pesos";
	}

    else
    {
		alert("Ingrese solo números!!!");
	}

}