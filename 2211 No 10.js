//Crie um programa de contagem progressiva. 
//Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let contador = parseInt(prompt('Digite o último número da contagem:'));
let sequencia = 0;

while(sequencia <= contador){
    alert(`${sequencia++}`);
}