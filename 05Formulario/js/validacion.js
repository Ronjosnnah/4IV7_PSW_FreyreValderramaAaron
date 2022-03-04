/*

Javascript es un lenguaje que posee un paradigma 
orientado a objetos y funciones, por tal motivo
presenta una particularidad la cual es:

NO TIPADO

No existe int, float, string, ni char, ni nada

TODO ES VAR -> variable 

De acuerdo al estandar ES6 se manejan 3 tipos
de variables 

VAR: Variable
LET: Es una variable de tipo "Protected" (Va a hacer que no puede ser modificado)
CONST: Constante

*/

function validar(formulario)
{
//Obtener los datos y discriminar a los que tienen 3 letras 

if(formulario.nombre.value.length < 5)
{
    
    alert("Escriba por lo menos 5 caracteres en el campo Nombre")
    formulario.nombre.focus();
    return false;

}

// nombre

var checkOK = "QWERTYUIOPÑLKJHGFDSAMNBVCXZ" + "aqwertyuiopsdfghjkklñzxcvbnm";

var checkStr = formulario.nombre.value;

var todoesvalido = true;

for(var i = 0; i < checkStr.length; i++)
{
    var ch = checkStr.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    {
        if(ch == checkOK.charAt(j))
        {
            break;
        }
    }
        if(j == checkOK.length)
        {
            todoesvalido = false;
            break;
        }
        
}
    if(!todoesvalido)
    {
        alert("Escriba unicamente letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

//edad

var checkOK = "0123456789";

var checkStr = formulario.edad.value;

var todoesvalido = true;

for(var i = 0; i < checkStr.length; i++)
{
    var ch = checkStr.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    {
        if(ch == checkOK.charAt(j))
        {
            break;
        }
    }
        if(j == checkOK.length)
        {
            todoesvalido = false;
            break;
        }
        
}
    if(!todoesvalido)
    {
        alert("Escriba unicamente numeros en el campo Edad");
        formulario.edad.focus();
        return false;
    }

// formulario

    var txt = formulario.email.value;

    //creo mi expresion regular

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?" ": " no ") + "valido" );

    return b.test;

}