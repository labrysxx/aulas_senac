//Variáveis globais
//valores complexos => Objeto
var matricula = document.getElementById("txtMatricula");
var nome = document.getElementById("txtNome");
var email = document.getElementById("txtEmail");
var serie = document.getElementById("txtSerie");
var dataDeNascimento = document.getElementById("txtDataNascimento");
var telefone = document.getElementById("txtTelefone");
var botaoExibir = document.getElementById("btnExibir");
var fichaDoAluno = document.getElementById("ficha-aluno");

//Debug
console.log(matricula);
console.log(nome);
console.log(email);
console.log(serie);
console.log(dataDeNascimento);
console.log(telefone);
console.log(botaoExibir);
console.log(fichaDoAluno);

function exibeCadastro(){
    //Variáveis locais
    //Valores primitivos => string, int, float ou boolean
    let valorMatricula = matricula.value;
    let valorNome = nome.value;
    let valorEmail = email.value;
    let valorSerie = serie.value;
    let valorDataDeNascimento = dataDeNascimento.value;
    let valorTelefone = telefone.value;

    //Exibição dos dados
    //alert(valorMatricula);
    //fichaDoAluno.textContent = "<h3>" + matricula + "</h3>" + valorMatricula;
    fichaDoAluno.innerHTML = "<h3 class='titulo'>Matricula:</h3>" + valorMatricula;
    fichaDoAluno.setAttribute('class', 'escrita-ativo');

    // atributo e parâmetro usa-se ''

}

