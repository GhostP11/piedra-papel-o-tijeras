let humanScore = 0;
let computerScore = 0;

function getComputerChoise() {
    let jugada_pc = Math.random();
    return jugada_pc < 0.333 ? "Piedra" : (jugada_pc >= 0.333 && jugada_pc < 0.666 ? "Papel" : "Tijeras");
}

function getHumanChoice() {
    let jugada_h = prompt("¡Vamos a Jugar!, escoge Piedra, Papel O Tijeras");
    return jugada_h.toLowerCase() === "piedra" ? "Piedra" : (jugada_h.toLowerCase() === "papel" ? "Papel" : "Tijeras");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultado = `${humanChoice} y ${computerChoice} son iguales, EMPATE ninguno suma puntos`;
    } else if ((humanChoice === 'Tijeras' && computerChoice === 'Papel') ||
        (humanChoice === 'Papel' && computerChoice === 'Piedra') ||
        (humanChoice === 'Piedra' && computerChoice === 'Tijeras')) {
        humanScore++;
        resultado = `${humanChoice} vence a ${computerChoice}, ¡FELICIDADES GANASTE! Usuario ${humanScore} Computadora ${computerScore}`;

    } else {
        computerScore++;
        resultado = `${computerChoice} vence a ${humanChoice}, Perdiste :( Usuario ${humanScore} Computadora ${computerScore}`;

    }
    return resultado;
    console.log(resultado);
}

function playGame() {
    let round = 1;
    for (let i = 1; round <= 5; i++) {
        console.log(`Round ${round++}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoise();
        console.log(humanChoice);
        console.log(computerChoice);
        console.log(playRound(humanChoice, computerChoice));
    }
    if (humanScore > computerScore) {
        console.log('¡Felicidades! le ganaste a la PC');
    } else {
        console.log('Que mal, perdiste :(');
    }
}

playGame();