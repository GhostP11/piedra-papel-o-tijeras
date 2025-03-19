let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
    let jugada_pc = Math.random();
    return jugada_pc < 0.333 ? "Piedra" : (jugada_pc < 0.666 ? "Papel" : "Tijeras");
}

function actualizarTexto(idElemento, texto) {
    document.querySelector(idElemento).textContent = texto;
}

function getHumanChoice(event) {
    let target = event.target;
    if (!target.matches("button")) return; 

    let humanChoice = target.textContent.trim(); 
    let computerChoice = getComputerChoice();

    playGame(humanChoice, computerChoice);
}

function playRound(humanChoice, computerChoice) {
    let resultado = "";

    if (humanChoice === computerChoice) {
        resultado = `Empate: Ambos eligieron ${humanChoice}.`;
    } else if ((humanChoice === 'Tijeras' && computerChoice === 'Papel') ||
        (humanChoice === 'Papel' && computerChoice === 'Piedra') ||
        (humanChoice === 'Piedra' && computerChoice === 'Tijeras')) {
        humanScore++;
        resultado = `Ganaste esta ronda: ${humanChoice} vence a ${computerChoice}.`;
    } else {
        computerScore++;
        resultado = `Perdiste esta ronda: ${computerChoice} vence a ${humanChoice}.`;
    }

    return resultado;
}

function playGame(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) return; 
    let resultado = playRound(humanChoice, computerChoice);

    actualizarTexto('#roundNumber', `Round: ${round}`);
    actualizarTexto('#jugadaHuman', `Jugador: ${humanChoice}`);
    actualizarTexto('#jugadaPc', `PC: ${computerChoice}`);
    actualizarTexto('#resultado', resultado);
    actualizarTexto('#score', `Puntaje - Jugador: ${humanScore} | PC: ${computerScore}`);

    round++; 
    
    if (humanScore === 5) {
        actualizarTexto('#finalResult', '¡Felicidades! Ganaste la partida 🎉');
    } else if (computerScore === 5) {
        actualizarTexto('#finalResult', 'Perdiste la partida. Inténtalo de nuevo 😢');
    }
}

document.querySelector('#jugada').addEventListener('click', getHumanChoice);
