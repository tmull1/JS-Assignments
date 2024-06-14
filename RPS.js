const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

const player1 = {
    name: 'Player 1',
    getHand: getHand
};

const player2 = {
    name: 'Player 2',
    getHand: getHand
};

const player3 = {
    name: 'Player 3',
    getHand: getHand
};

const player4 = {
    name: 'Player 4',
    getHand: getHand
};

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    let winner = null;
    if (hand1 === hand2) {
        console.log(`${hand1} vs ${hand2} - It's a tie!`);
    } else if ((hand1 === 'rock' && hand2 === 'scissors') || 
               (hand1 === 'paper' && hand2 === 'rock') || 
               (hand1 === 'scissors' && hand2 === 'paper')) {
        console.log(`${hand1} vs ${hand2} - ${player1.name} wins!`);
        winner = player1;
    } else {
        console.log(`${hand1} vs ${hand2} - ${player2.name} wins!`);
        winner = player2;
    }

    return winner;
}

function playGame(player1, player2, playUntil) {
    let score1 = 0;
    let score2 = 0;

    while (score1 < playUntil && score2 < playUntil) {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            score1++;
        } else if (winner === player2) {
            score2++;
        }
        console.log(`${player1.name}: ${score1} - ${player2.name}: ${score2}`);
    }

    return score1 === playUntil ? player1 : player2;
}

function playTournament(players, playUntil) {
    const semiFinal1Winner = playGame(players[0], players[1], playUntil);
    const semiFinal2Winner = playGame(players[2], players[3], playUntil);

    const finalWinner = playGame(semiFinal1Winner, semiFinal2Winner, playUntil);

    console.log(`${finalWinner.name} is the world champion`);
}

const players = [player1, player2, player3, player4];
playTournament(players, 3);
