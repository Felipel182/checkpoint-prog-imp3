const aluno = require('./aluno');



const felipe = new aluno.construtor('Felipe',3,[8,7,9,10]);
aluno.faltas(felipe);
aluno.faltas(felipe);

const josenildo  = new aluno.construtor('Josenildo',8,[5,7,9,6]);
aluno.faltas(josenildo);

const maria = new aluno.construtor('Maria',3,[7,7,8,9]);
const murilo  = new aluno.construtor('Murilo',4,[8,9,9,9]);
aluno.faltas(maria);
aluno.faltas(murilo);
aluno.faltas(murilo);
aluno.faltas(murilo);
aluno.faltas(murilo);
aluno.faltas(murilo);
aluno.faltas(murilo);


module.exports = {
    felipe,
    josenildo,
    maria,
    murilo,    
}