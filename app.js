/*--------------------
    DECLARATIONS
---------------------*/

let userScore         = 0;
let compScore         = 0;
const userScore_span    = document.querySelector('.user-score');
const compScore_span    = document.querySelector('.computer-score');
const result_div        = document.querySelector('.result');
const rockDiv           = document.getElementById('r');
const paperDiv          = document.getElementById('p');
const scissorsDiv       = document.getElementById('s');
const choiceObj         = {
    r: 'Rock',
    s: 'Scissors',
    p: 'Paper'
}

// function for getting computer choice

function getCompChoice() {
    const choices = ['r', 'p', 's']
    const rand = Math.floor(Math.random() * 3)
    return choices[rand];
}


function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = 'User <sub>[' + choiceObj[user] + ']</sub> beats Computer <sub>[' + choiceObj[comp] + ']</sub>. You Win!!!';
    document.getElementById(user).classList.add('green');
    setTimeout(() => {document.getElementById(user).classList.remove('green')}, 400);
}

function lose(user, comp) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = 'Computer <sub>[' + choiceObj[comp] + ']</sub> beats User <sub>[' + choiceObj[user] + ']</sub>. You Lose!!!';
    document.getElementById(user).classList.add('red');
    setTimeout(() => {document.getElementById(user).classList.remove('red')}, 400);
}

function draw(user, comp) {
    result_div.innerHTML = "Both picks " + choiceObj[user] + ". It's a Draw!!!";
    document.getElementById(user).classList.add('grey');
    setTimeout(() => {document.getElementById(user).classList.remove('grey')}, 400);
}
// Game function declaration

function game(userChoice) {
    const compChoice = getCompChoice();
    
    switch(userChoice + compChoice) {
        case "rp":
        case 'sr':
        case 'ps':
            lose(userChoice, compChoice);
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            draw(userChoice, compChoice)
            break;
        case "pr":
        case 'rs':
        case 'sp':
            win(userChoice, compChoice);
            break;
        default:
            console.log('eo');
    }
    
}

// main function declaration

function main() {

    // Event Listener for Rock div
    rockDiv.addEventListener('click', () => {
        game('r');
    })

    // Event Listener for paper div
    paperDiv.addEventListener('click', () => {
        game('p');
    })

    // Event Listener for scissors div
    scissorsDiv.addEventListener('click', () => {
        game('s');
    })
}

main();
























