const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notaDaSala){

    const somaNota = notaDaSala.reduce( function(acumulador, nota){ // passar a nota como parametro pois queremos acessar a nota de cada indice

        return acumulador + nota;  // se somarmos acumulador + nota, vai acontecer o comportamento que esperamos. O acumulador vai começar do zero e a cada iteração vai somar com uma nota da lista

    }, 0); // começa com 0

    let media = somaNota/notaDaSala.length;

    return media;
}

console.log(` A média da sala Js é ${calculaMedia(salaJS)}`);

// outro codigo 

const numeros = [43, 50, 65, 12];

function somaNumeros(numeros){
    const somaTotal = numeros.reduce(function(acumuladores, numero){

        return acumuladores + numero;

    }, 0);

    console.log(somaTotal);
}