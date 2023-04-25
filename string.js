console.log("STRING TREINO");

let nome = "Casinha";

let nomeMaisuculo = "";

for (let i = 0; i < nome.length; i++){
    nomeMaisuculo = nomeMaisuculo + nome[i].toUpperCase();

}

console.log(nomeMaisuculo);

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto);