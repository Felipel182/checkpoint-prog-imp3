const aluno = {
    nome: '',
    quantidadeFaltas: 0,
    notas: [],
    construtor: function(nome, faltas, notas) {
        this.nome = nome;
        this.quantidadeFaltas = faltas;
        this.notas = notas;
    },
  
    calcularMedia: function(aluno){
        let media = 0;

        for(let i = 0; i < aluno.notas.length; i++){
        media += aluno.notas[i];

        }

        return media / aluno.notas.length;
    },
    faltas: function(aluno){
        aluno.quantidadeFaltas += 1;
    }
}

module.exports = aluno;