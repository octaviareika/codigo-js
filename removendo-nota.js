console.log("Removendo nota!");

const notas = [5, 6, 10, 7.5, 5];

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(`A média é ${media}`);