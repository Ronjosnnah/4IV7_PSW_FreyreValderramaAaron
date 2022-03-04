function validar (formulario)
{

// Valor del automovil

if(formulario.Valor_automovil.value < 100000)
{
        
    alert("Escriba una cifra entre 100, 000 y 1,000,000")
    formulario.Valor_automovil.focus();
    return false;
    
}

if(formulario.Valor_automovil.value > 1000000)
{
        
    alert("Escriba una cifra entre 100, 000 y 1,000,000")
    formulario.Valor_automovil.focus();
    return false;
    
}

var checkOK = "1234567890";

var checkStr = formulario.Valor_automovil.value;

var todoesvalido = true;

for(var i = 0; i < checkStr.value; i++)
{
    var ch = checkStr.charAt(i);
    for(var j = 0; j < checkOK.value; j++)
    {
        if(ch == checkOK.charAt(j))
        {
            break;
        }
    }
        if(j == checkOK.value)
        {
            todoesvalido = false;
            break;
        }
        
}
    if(!todoesvalido)
    {
        alert("Ingrese un numero entre 100, 000 y 1, 000, 000 ");
        formulario.Valor_automovil.focus();
        return false;
    }

//Campo de calculo de la cuota inicial

    if(formulario.Cuota_inicial.value < (formulario.Valor_automovil.value * 0.1))
    {
            
        alert("La cuota inicial a pagar no debe ser menor al 10% del valor del automovil")
        formulario.Cuota_inicial.focus();
        return false;
        
    }

var checkOK = "1234567890";

var checkStr = formulario.Cuota_inicial.value;

var todoesvalido = true;

for(var i = 0; i < checkStr.value; i++)
{
    var ch = checkStr.charAt(i);
    for(var j = 0; j < checkOK.value; j++)
    {
        if(ch == checkOK.charAt(j))
        {
            break;
        }
    }
        if(j == checkOK.value)
        {
            todoesvalido = false;
            break;
        }
        
}
    if(!todoesvalido)
    {
        alert("La cuota inicial a pagar no debe ser menor al 10% del valor del automovil");
        formulario.Cuota_inicial.focus();
        return false;
    }
    
// Campo del periodo



// Campo del interes

// var = formulario.Valor_automovil.value(formulario.Periodo.value * 0.0394);

// Examen_Practico.getElementaryById("tabla").rows[1].cells[4];

if(formulario.Periodo.value = 3)
{
        
    //alert("Escriba una cifra entre 100, 000 y 1,000,000")
    //formulario.Interes.focus();
    //return false;
    
    //document.getElementaryById("tabla").rows[1].cells[4] = formulario.Valor_automovil.value * 3 * 0.0394;

    document.forms[0].elements.Interes
}



//Campo de la Cuota

}

