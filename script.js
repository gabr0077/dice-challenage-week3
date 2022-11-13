let firstNum = 0;
let totalScore = 0;



const btnRoll = document.getElementById('btnRoll');
const btnReload = document.getElementById('btnReload');

roll = () => {


    let rndNum = Math.floor(Math.random() * 6) + 1;
    let firstDice = 'images/Dice' + rndNum + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', firstDice);
    document.querySelectorAll('p')[1].innerHTML = rndNum;


    let secrndNum = Math.floor(Math.random() * 6) + 1;
    let secondDice = 'images/Dice' + secrndNum + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', secondDice);
    document.querySelectorAll('p')[1].innerHTML = rndNum;

    


    totalScore += rndNum;

    
    document.querySelectorAll('p')[1].innerHTML = totalScore;

    if (firstNum > secrndNum) {
        document.querySelector('h1').innerHTML = "the winner is player1!";
    } 
    else if   (firstNum < secrndNum) {
        document.querySelector('h1').innerHTML = "the winner is player2!";
         
    }
    
    else if (firstNum == 1) {
        document.querySelector('h1').innerHTML = "You lose!"
    };
}

reload = () => {
    console.log("Reloaded");
    totalScore = 0;
    console.log(totalScore);

    document.querySelectorAll('p')[1].innerHTML = totalScore;
    document.querySelector('h1').innerHTML = "roll the dice to start the game!";
}

btnRoll.addEventListener('click', () => {
    roll();
})

btnReload.addEventListener('click', () => {
    reload();
})
