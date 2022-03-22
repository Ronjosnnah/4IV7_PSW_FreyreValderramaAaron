

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