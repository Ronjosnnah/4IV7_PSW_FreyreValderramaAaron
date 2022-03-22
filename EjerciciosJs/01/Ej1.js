function leerValores()
{
    var monto = parseFloat (document.getElementById("dinero").value);
    var campo = document.getElementById("dinero").value;
    var validar = /^[0-9.]+$/;

    if (monto < 0)
    {
        alert("No se aceptan montos negativos");
    }
    else if (campo == "")
    {
        alert ("Ingrese los datos");
    }
    else if (campo.match(validar))
    {
        var resultado = (monto * 0.02);
        var resultadof = resultado + monto;

        document.getElementById('monto').textContent = "Monto actual: " + resultadof + "pesos" ;
    }
    else
    {
        alert("Ingrese solo numeros");
    }

}