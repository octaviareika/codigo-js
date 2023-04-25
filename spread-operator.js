const notas = [2, 4 , 7, 8];

const novaNotas = [...notas];

novaNotas.push(10);

console.log(novaNotas);
console.log(notas);



function somaNotasNovas(novaNotas){

    let somaNovasNotas = 0;

    novaNotas.forEach(function(nota){

        somaNovasNotas = somaNovasNotas + nota; 

    });

    return somaNovasNotas; 
}

console.log(`${somaNotasNovas(novaNotas)}`);
console.log(`${somaNotasNovas(notas)}`);

