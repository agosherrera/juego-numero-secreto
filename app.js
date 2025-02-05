let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMax = 10;

//funcion generica para reemplazar elementos del html
function asignarTextoElemento(elemento,texto) {
    let elementoHtml = document.querySelector(elemento);//funcion para seleccionar un elemento de todos los que hay en la parte html
    elementoHtml.innerHTML = texto;
    return; //no retorna nada pero por la buena practica se recomienda poner
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1; //del uno al diez elije un numero al azar, el math.floor retorna la parte entera
    //chequear si ya se sortearon todos los numeros
    console.log(listaNumerosSorteados)
    console.log(numeroGenerado)
    if (listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento('p','Ya te sortearon todos los numeros posibles')
    }else {
        //sino entra al ciclo agregandose a la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
}
}

function condicionesIniciales() {
    asignarTextoElemento("h1","JUEGO DEL NÚMERO SECRETO"); //llamo a la funcion y le paso los parametros
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMax}`);//otro ejemplo con la misma funcion
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);//selecciona un elemento del html segun su ID


    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número! en ${intentos} ${intentos == 1 ? 'intento.' : 'intentos.'}`)
        document.getElementById('reiniciar').removeAttribute('disabled'); //remueve el atributo disable para habilitar el boton de <nuevo juego>

    } else {
        if (numeroDeUsuario < numeroSecreto){
        asignarTextoElemento('p','El numero secreto es mayor!')
    } else asignarTextoElemento('p','El numero secreto es menor!')
    intentos++;
    limpiarCaja();
    }
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

function reiniciarJuego() {
    //primero hay que limpiar la caja 
    limpiarCaja();
    //reiniciar las condiciones iniciales
    condicionesIniciales();
    //Volver a deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')//coloca el atributo con el respectivo valor que le pongamos <true>
}


condicionesIniciales();