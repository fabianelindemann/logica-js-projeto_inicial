//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

alert("O saldo da sua conta é: R$ 5000,00");
let saldoInicial = 5000;
let saque = prompt("Informe o valor do saque desejado R$:") ;
let saldoDisponivel = saldoInicial-saque;
alert(`Seu novo saldo é: R$ ${saldoDisponivel},00`);
