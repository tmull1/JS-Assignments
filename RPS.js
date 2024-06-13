
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


const winner = playRound(player1, player2);
if (winner) {
    console.log(`The winner is ${winner.name}`);
} else {
    console.log('No winner this round.');
}
