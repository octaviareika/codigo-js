console.log("Acessando nota de cada um dos alunos");

const alunos = ['Juliana', 'Pedro', 'Ana', 'Carlos'];
const medias = [10, 8, 6.5, 4];

const mediaEAlunos = [alunos, medias];

console.log(` O aluno da posição 1 da lista de alunos é: ${mediaEAlunos[0][1]} e sua média é ${mediaEAlunos[1][1]}`); // matriz (vetor dentro de vetor)