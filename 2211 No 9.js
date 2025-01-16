//Crie um programa de contagem regressiva. 
//Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contador = prompt('Digite um número para iniciar a contagem regressiva:');
let sequencia = contador;

while(sequencia >= 1){
    alert(`${sequencia--}`);
    contador--;
}

