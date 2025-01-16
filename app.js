alert("Adivinhe o número!");
let numeroSecreto = 10;
console.log(numeroSecreto);
let chute = prompt ("Escolha um número entre 1 e 30");

if(chute == numeroSecreto) {
    alert(`Parabéns, você acertou! Número Secreto: ${numeroSecreto} 😃`);
}
else{
    alert("Errrrroooouuuu")
}