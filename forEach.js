const notas = [5, 6, 10, 7.5, 5];

let somaDeNotas = 0;

notas.forEach( function(nota){ // a variavel nota vai ser passada por parametro dentro da função  

    somaDeNotas = somaDeNotas + nota;

}); // geralmente a função forEach não tem retorno 

let media = somaDeNotas/notas.length;

console.log(somaDeNotas);
console.log(media); 