/*******************************************************************************************************************
 * Objetivo: Manipular entrada de dados via teclado no terminal
 * Autor: Leonardo Torquato de Andrade
 * Data: 04/08/2023 
 * Versão: 1.0
 ******************************************************************************************************************/

//Import da biblioteca readline, que recebe dados digitados pelo usuário no terminal
var readline = require('readline');

//Cria um elemento para entrada de dados do usuário via teclado
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

//Solicita a entrada de dados no terminal, através de uma função de CallBackdo metodo question

//entrada de dados do nome de usuário
entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    //Recebe na variavel nome o conteúdo digitado pelo usuário
    var nome = nomeUsuario;

    //Entrada de dados de idade do usuário
    entradaDeDados.question('Digite sua idade: ', function(idadeUsuario){
        var idade = idadeUsuario;

        //Entrada de dados do email do usuario
        entradaDeDados.question('Digite seu email: ', function(emailUsuario){
            var email = emailUsuario;

            //Entrada de dados do telefone do usuario
            entradaDeDados.question('Digite seu telefone: ', function(telefoneUsuario){
                var telefone = telefoneUsuario;

                //Exibe na tela um texto e a variável
                console.log('Bem vindo ao aplicativo, ' + nome);
                console.log('A idade do usuário é: ' + idade + ' anos');
                console.log('O email do usuário é: ' + email);
                console.log('O telefone do usuário é: ' + telefone);

                //Encerrar a entrada de dados pelo usuário
                entradaDeDados.close();
            });
        });
    });
});