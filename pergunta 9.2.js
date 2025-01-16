//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
//Caso contrário, mostre "Tente novamente para ganhar.". (fiz o que eu queria, foda-se)
let chute = prompt("Chute um número e receba uma pontuação:");
let pontuacao1 = 50 ;
let pontuacao2 = 100;

if(chute >=232) {
    alert(`Parabéns, ganhou a pontuação máxima! ${pontuacao2} 😃`);
}
else{
  alert(`Você ganhou ${pontuacao1} 😃`);
}