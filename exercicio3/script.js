//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }
const nome = prompt ("Qual o seu nome?")
const idade = prompt ("Qual a sua idade?")
nome === "José" ? console.log ('Oi, Zé!') : console.log (`Olá, ${nome}!`)
idade>=18 ? console.log("Pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista")