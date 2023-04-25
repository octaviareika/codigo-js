console.log("Crie uma função que recebe como argumento o nome de um aluno. Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice. Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.");

const alunos = ['Juliana', 'Pedro', 'Ana', 'Carlos'];
const medias = [10, 8, 6.5, 4];

const mediaEAlunos = [alunos, medias];

function exibeNomeNota(aluno){
    if (mediaEAlunos[0].includes(aluno)){ // usaremos o método includes() — que significa "incluir", em inglês. Como parâmetro dele, passaremos aluno. Ou seja, se o nome de um aluno está incluso na lista
        console.log("O aluno está cadastrado");

        const alunos = mediaEAlunos[0];
        const medias = mediaEAlunos[1];

        const indice = alunos.indexOf(aluno); // acessa o indice do aluno que foi passado por parametro 

        const mediaDoAluno = medias[indice]; // Acessa o indice um da matriz e verifica a nota. Para encontrar o índice de um elemento em um array, podemos usar o método indexOf()

        console.log(`A média do aluno é ${mediaDoAluno}`);
        
    }
    else {
        console.log("O aluno não está cadastrado");
    }

}

exibeNomeNota("Pedro");