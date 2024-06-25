const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
} // Math.random() to get a random number between 0 and 1, multiplies it by 10
  // then uses parseInt to convert it to an integer 

const player1 = {
    name: 'Player 1',
    getHand: getHand,
    score: 0
};

const player2 = {
    name: 'Player 2',
    getHand: getHand,
    score: 0
};

const player3 = {
    name: 'Player 3',
    getHand: getHand,
    score: 0
};

const player4 = {
    name: 'Player 4',
    getHand: getHand,
    score: 0
};
// Object representing Player 1-4 with a name and the getHand function

function playRound(player1, player2) {
    const hand1 = player1.getHand(); // both players hands
    const hand2 = player2.getHand();

    let winner = null; // variable to store winner
    if (hand1 === hand2) {
        console.log(`${hand1} vs ${hand2} - It's a tie!`);
        logRoundResult(`${hand1} vs ${hand2} - It's a tie!`);
    } else if ((hand1 === 'rock' && hand2 === 'scissors') || 
               (hand1 === 'paper' && hand2 === 'rock') || 
               (hand1 === 'scissors' && hand2 === 'paper')) {
        console.log(`${hand1} vs ${hand2} - ${player1.name} wins!`);
        logRoundResult(`${hand1} vs ${hand2} - ${player1.name} wins!`);
        winner = player1;
    } else {
        console.log(`${hand1} vs ${hand2} - ${player2.name} wins!`);
        logRoundResult(`${hand1} vs ${hand2} - ${player2.name} wins!`);
        winner = player2;
    }

    return winner;
}

function playGame(player1, player2, playUntil) { // function plays till specified score
    player1.score = 0;
    player2.score = 0;

    while (player1.score < playUntil && player2.score < playUntil) {
        const winner = playRound(player1, player2); // playRound in a loop until one player reaches target score.
        if (winner === player1) {
            player1.score++;
        } else if (winner === player2) {
            player2.score++;
        }
        console.log(`${player1.name}: ${player1.score} - ${player2.name}: ${player2.score}`);
        updateScores(player1, player1.score, player2, player2.score);
    }

    return player1.score === playUntil ? player1 : player2;
     // Return the player who reached the target score first
}     // ? = if else

function playTournament(players, playUntil) {
    const semiFinal1Winner = playGame(players[0], players[1], playUntil);
    const semiFinal2Winner = playGame(players[2], players[3], playUntil);

    const finalWinner = playGame(semiFinal1Winner, semiFinal2Winner, playUntil);

    console.log(`${finalWinner.name} is the world champion`);
    logRoundResult(`${finalWinner.name} is the world champion`);
}

const players = [player1, player2, player3, player4];

function startTournament() {
    player1.name = document.getElementById('player1-name').value || 'Player 1';
    player2.name = document.getElementById('player2-name').value || 'Player 2';
    player3.name = document.getElementById('player3-name').value || 'Player 3';
    player4.name = document.getElementById('player4-name').value || 'Player 4';

    document.getElementById('player1-score').innerText = `${player1.name}: 0`;
    document.getElementById('player2-score').innerText = `${player2.name}: 0`;
    document.getElementById('player3-score').innerText = `${player3.name}: 0`;
    document.getElementById('player4-score').innerText = `${player4.name}: 0`;

    playTournament(players, 3);
}

function logRoundResult(result) {
    const roundResults = document.getElementById('round-results');
    const resultDiv = document.createElement('div');
    resultDiv.innerText = result;
    roundResults.appendChild(resultDiv);
}

function updateScores(player1, score1, player2, score2) {
    document.getElementById('player1-score').innerText = `${player1.name}: ${score1}`;
    document.getElementById('player2-score').innerText = `${player2.name}: ${score2}`;
}

let currentPlayer1 = null;
let currentPlayer2 = null;
let currentRound = 0;

function chooseHand(hand) {
    if (!currentPlayer1 || !currentPlayer2) return;

    const playerHand = hand;
    const opponentHand = currentPlayer2.getHand();

    let winner = null;
    if (playerHand === opponentHand) {
        logRoundResult(`${playerHand} vs ${opponentHand} - It's a tie!`);
    } else if ((playerHand === 'rock' && opponentHand === 'scissors') || 
               (playerHand === 'paper' && opponentHand === 'rock') || 
               (playerHand === 'scissors' && opponentHand === 'paper')) {
        logRoundResult(`${playerHand} vs ${opponentHand} - ${currentPlayer1.name} wins!`);
        winner = currentPlayer1;
    } else {
        logRoundResult(`${playerHand} vs ${opponentHand} - ${currentPlayer2.name} wins!`);
        winner = currentPlayer2;
    }

    if (winner) {
        winner.score++;
        updateScores(currentPlayer1, currentPlayer1.score, currentPlayer2, currentPlayer2.score);
    }

    currentRound++;
    if (currentPlayer1.score < 3 && currentPlayer2.score < 3) {
        playRound(currentPlayer1, currentPlayer2);
    } else {
        setTimeout(() => {
            currentPlayer1 = null;
            currentPlayer2 = null;
            alert('Round over. Start the next round or tournament.');
        }, 1000);
    }
}
