alert("Boas vindas ao nosso site!!");
let nome = "LUA";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert("ERRO! PREENCHA TODOS OS CAMPOS");
let mensagemDeErro = "ERRO! PREENCHA TODOS OS CAMPOS (2)";
alert(mensagemDeErro);
nome = prompt("Digite seu nome");
idade = prompt("Digite sua idade");
if(idade >= 18){
    alert("Pode tirar a habilitação!");
}
else{
    alert("Não pode tirar CNH");
}