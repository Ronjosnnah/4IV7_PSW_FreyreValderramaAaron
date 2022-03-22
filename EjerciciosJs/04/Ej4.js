function leerValores()
{

    var p1 = parseFloat(document.getElementById("par1").value);
    var p2 = parseFloat(document.getElementById("par2").value);
    var p3 = parseFloat(document.getElementById("par3").value);
    var examen = parseFloat(document.getElementById("examen").value);
    var tFinal = parseFloat(document.getElementById("tFinal").value);
    var p1_1 = document.getElementById("par1").value;
    var p2_1 = document.getElementById("par2").value;
    var p3_1 = document.getElementById("par3").value;
    var examen_1 = document.getElementById("examen").value;
    var tFinal_1 = document.getElementById("tFinal").value;
    var validar = /^[0-9.]+$/;

    if (p1<0 || p2<0 || p3<0 || examen<0 || tFinal<0  )
    {
		alert("No puede poner numeros negativos")	
	}

    else if(p1_1=="" || p2_1=="" || p3_1=="" || examen_1=="" || tFinal_1=="")
    {
		alert("Ingrese los datos");
	}

    else if(p1_1.match(validar) && p2_1.match(validar) && p3_1.match(validar) && examen_1.match(validar) && tFinal_1.match(validar))
    {	
        var promedioP=((p1+p2+p3)/(3))*(0.55);
        var examenP=(examen)*(0.30);
        var tFinalP=(tFinal)*(0.15);
        var calfFinal=promedioP+examenP+tFinalP;

        document.getElementById('calf').textContent = "Su calificación final es: "+calfFinal;
	}

    else
    {
        alert("Ingrese UNICAMENTE numeros");
    }

}