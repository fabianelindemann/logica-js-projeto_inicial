// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Informe o dia da semana de hoje:");

if(diaSemana == "Sábado" || diaSemana == "Domingo"){
    alert("Bom fim de semana!");
} 
else{
  if (diaSemana == "Segunda" || diaSemana == "Terça" || diaSemana == "Quarta" || diaSemana == "Quinta" || diaSemana == "Sexta" )
    alert("Boa Semana!")
}

