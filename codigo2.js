console.log("Trabalhando com mais variaveis e arrays");


const salvador = `Salvador` ;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
const idadeComprador = 15; 
const estaAcompanhado = true;
let passagemComprada; 
const destino = "Salvador";

console.log("Destinos possíveis: ");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

if (idadeComprador > 18 || estaAcompanhado == true){

    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); // se a idade do comprador for maior de 18, um item será removido da lista
    passagemComprada = true;
}

else {

     console.log("Não é possivel comprar o produto");
     passagemComprada = false;

}