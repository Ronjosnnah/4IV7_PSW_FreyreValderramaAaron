//Problema 1

function problema1()
{
    var cadena = document.getElementById('p1-input').value;
    var caracteres = cadena.split("");
    var cadena_nueva = ""

    for (i = (caracteres.length - 1); i > -1; i--)
    {
        cadena_nueva += caracteres[i]
    }

    document.querySelector('#p1-output').textContent = cadena_nueva;

}

// Problema 2

function problema2()
{

    var validar = /^[0-9.]+$/;

    var x1 = parseFloat(document.getElementById("p2-x1").value);
    var x2 = parseFloat(document.getElementById("p2-x2").value);
    var x3 = parseFloat(document.getElementById("p2-x3").value);
    var x4 = parseFloat(document.getElementById("p2-x4").value);
    var x5 = parseFloat(document.getElementById("p2-x5").value);

    var y1 = parseFloat(document.getElementById("p2-y1").value);
    var y2 = parseFloat(document.getElementById("p2-y2").value);
    var y3 = parseFloat(document.getElementById("p2-y3").value);
    var y4 = parseFloat(document.getElementById("p2-y4").value);
    var y5 = parseFloat(document.getElementById("p2-y5").value);

    var xp1 = document.getElementById("p2-x1").value;
    var xp2 = document.getElementById("p2-x2").value;
    var xp3 = document.getElementById("p2-x3").value;
    var xp4 = document.getElementById("p2-x4").value;
    var xp5 = document.getElementById("p2-x5").value;

    var yp1 = document.getElementById("p2-y1").value;
    var yp2 = document.getElementById("p2-y2").value;
    var yp3 = document.getElementById("p2-y3").value;
    var yp4 = document.getElementById("p2-y4").value;
    var yp5 = document.getElementById("p2-y5").value;


    if (xp1 == "" || xp2 == "" || xp3 == "" || xp4 == "" || xp5 == "" || yp1 == "" ||  yp2 == "" || yp3 == "" || yp4 == "" || yp5 == "")
    {
        alert ("Ingrese todos los datos");
    }
    else if (xp1.match(validar) && yp1.match(validar) && xp2.match(validar) && yp2.match(validar) && xp3.match(validar) && yp3.match(validar) && xp4.match(validar) && yp4.match(validar) && xp5.match(validar) && yp5.match(validar))
    {
        var pEscalar = (x1*y1) + (x2*y2) + (x3*y3) + (x4*y4) + (x5*y5);
         document.getElementById('p2-output').textContent = "El valor del producto escalar es: " + pEscalar;
    }
    else
    {
        alert ("Solo numeros")
    }

}

//Problema 3

function problema3()
{

    //Definir un alfabeto
    var alfabeto = [ 'A', 'B', 'C', 'D', 'E', 'F', 
        'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
        'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
        'V', 'W', 'X', 'Y', 'Z' ];

    //Obtener la cadena del input y separar por comas

    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //Eliminar el espacio que hay entre cada palabra

    p3_palabras = p3_palabras.map(function (palabra)
    {
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //Calcular los caracteres unicos de cada palabra

    var p3_res = '';

    //Iterar en cada palabra 

    p3_palabras.forEach(function (palabra, i)
    {
        //separar las palabras en un array para leer cada letra
        var letras_unicas =[];
        var palabra_array = palabra.split('');

        // Iterar al alfabeto 
        alfabeto.forEach(function (letra, j)
        {
            //Iterar por palabra
            palabra_array.forEach(function (letra_palabra, k)
            {
                //Comprobar que la letra esta dentro del alfabeto
                if(letra_palabra == letra)
                {
                    //Si la letra no la hemos contado, la agregamos a un array para contar las letras unicas 
                    if(letras_unicas.indexOf(letra) < 0 )
                    {
                        letras_unicas.push(letra);
                    }

                }
            });
        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });

    //document.querySelector('#p3-output').innerHTML (para agregar un campo en el HTML)
    
    document.querySelector('#p3-output').textContent = p3_res;

    

}