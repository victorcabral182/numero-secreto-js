// ativar, configurar e iniciar o WEB SPEACH API------------------------------------ OK
// imprimir o valor da tentativa na tela ------------------------------------------- OK
// permitir que o reconhecimento de voz aconteça após toda tentativa --------------- OK

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();
recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", restart)


const divMessage = document.querySelector("#chute")
/////////////////////////////////////////////////////////////////////////////////////////
function onSpeak(e){
    const talk = e.results[0][0].transcript;
    divMessage.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${talk}</span>
    `
    validation(talk)
    // console.log(talk)
}

function restart(){
    recognition.start();
}






















// const elementoChute = document.getElementById("chute");
// window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.lang = 'pt-Br'
// recognition.start()
// recognition.addEventListener("result", onSpeak)

// function onSpeak(e){
//     chute = e.results[0][0].transcript;
//     console.log(chute);
//     exibeChuteNaTela(chute);
//     verificaSeOChutePossuiUmValorValido(chute);
// }

// function exibeChuteNaTela(chute){
//     elementoChute.innerHTML = `
//         <div>Você disse</div>
//         <span class="box">${chute}</span>
//     `
// }

// recognition.addEventListener("end", ()=> recognition.start())