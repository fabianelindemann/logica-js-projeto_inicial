//let porcentagemDesconto = 0;
//if(quantidadeMilhas > 5000){
  //  porcentagemDesconto = porcentagemDesconto + 10;
//}
//if(quantidadeMilhas >= 30000){
//    porcentagemDesconto = porcentagemDesconto + 20;
//} else {
//    porcentagemDesconto = 0;
//}

alert("Qual meu desconto?");
let quantidadeMilhas = prompt("Informe a quantidade de milhas disponível para saber seu desconto:")
let porcentagemDesconto = 0; 

if(quantidadeMilhas >= 30000){
    alert(` Seu desconto é de: ${porcentagemDesconto = porcentagemDesconto + 20}`);
} else{
    alert(` Seu desconto é de: ${porcentagemDesconto = 0}`);
    if(quantidadeMilhas > 5000)
    alert(` Seu desconto é de: ${porcentagemDesconto = porcentagemDesconto + 10}`);
}

// A utilização do bloco if dentro do bloco else garante que, caso a quantidade de milhas for superior a 30000,
// o desconto será de 20%, e caso não for superior a este valor, mas for superior a 5000, 
//o desconto será de 10%. Para o caso da quantidade de milhas ser inferior a 5000, 
//o desconto permanecerá zerado, pois não existe a quantidade mínima para ganhar desconto.