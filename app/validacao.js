// VERIFICAR SE O CHUTE TEM UM VALOR VÁLIDO
// VERIFICAR SE É MENOR, MAIOR E INDICAR VISUALMENTE NO HTMLESSA INFORMAÇÃO
// SE O VALOR FOR IGUAL AO CHUTE DO USUÁRIO EXIBIR NA TELA QUE ELE ACERTOU
// CRIAR UM BOTÃO PARA REINICIAR O JOGO

function validation(talk){
    const userTry = parseInt(talk);
    
    if(isNaN(userTry)){
        divMessage.innerHTML = `
        <div>Valor inválido.</div>
        `
    } 
    if(userTry < secretNumber){
        divMessage.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else if (userTry > secretNumber) {
        divMessage.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
    if(userTry === secretNumber){
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h2>O número secreto é: ${secretNumber}</h2>
            <button class="btn-jogar">Jogar novamente.</button>
        `
        const btnPlayAgain = document.querySelector(".btn-jogar")
        
        
        btnPlayAgain.addEventListener("click", playAgain)
    }
    
}

function playAgain(){
    window.location.reload()
}
























// function verificaSeOChutePossuiUmValorValido(chute){
//     const numero = +chute //transforma uma string em um número inteiro

//     if(chuteForInvalido(numero)){
//         elementoChute.innerHTML += "<div>Valor inválido</div>"
//         return
//     }
//     if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
//         elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
//         return
//     }
//     if(numero === numeroSecreto) {
//         document.body.innerHTML = `
//             <h2>Você acertou!</h2>
//             <h3>O número secreto era ${numeroSecreto}</h3>
//             <button id="jogar-novamente" class="btn-jogar">Jogar novamente!</button>
//         `
//     } else if(numero > numeroSecreto){
//         elementoChute.innerHTML += `
//         <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
//         `
//     } else{
//         elementoChute.innerHTML += `
//         <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
//         `
//     }
// }
// function chuteForInvalido(numero) {
//     return Number.isNaN(numero)
// }
// function numeroForMaiorOuMenorQueOValorPermitido(numero) {
//     return numero > maiorValor || numero < menorValor
// }

// document.body.addEventListener("click", e=>{
//     if(e.target.id == "jogar-novamente");
//     window.location.reload()
// })