console.log("Meu primeiro programa");

console.log("Trabalhando com mais variaveis e arrays");


const salvador = `Salvador` ;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
const idadeComprador = 15; 
const estaAcompanhado = true;
const destino = "Salvador";

console.log("Destinos possíveis: ");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const podeComprar = idadeComprador > 18 || estaAcompanhado == true; // se a pessoa for maior de idade ou se está acompanhado de alguem 

let contador = 0;
let destinoExiste = false;

while (contador < 3){

    if (listaDeDestinos[contador] == destino){
        console.log("Destino existe!");
        destinoExiste = true; 
        break;
    }

    contador++;
}

console.log("Destino não existe", destinoExiste);

if (destinoExiste && podeComprar){
    console.log("Boa viagem!");
}

else {
    console.log("Erro.");
}