// Criar o número sorteado------------------------------------------ OK
// Definir o menor e maior valor------------------------------------ OK
// Inserir via JS os valores acima---------------------------------- OK

const secretNumber = createRandomNumber();
console.log(`O número secreto é: ${secretNumber}`);
const lowerValue = 250;
const highestValue = 2500;
const elementLowerValue = document.querySelector("#menor-valor");
elementLowerValue.innerHTML = lowerValue;
const elementHighestValue = document.querySelector("#maior-valor");
elementHighestValue.innerHTML = highestValue;

function createRandomNumber() {
    return parseInt(Math.random() * 1000 + 1);
}




















// const menorValor = 1;
// const maiorValor = 1000;
// const numeroSecreto = gerarNumeroAleatorio();

// function gerarNumeroAleatorio(){
//     return parseInt(Math.random() * maiorValor + 1);
// }

// console.log("Número secreto:", numeroSecreto);

// const elementoMenorValor = document.getElementById("menor-valor");
// elementoMenorValor.innerHTML = menorValor;
// const elementoMaiorValor = document.getElementById("maior-valor");
// elementoMaiorValor.innerHTML = maiorValor;