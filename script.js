const input = document.querySelector('#input-number');
const check = document.querySelector('#check');
const hint = document.querySelector('#hint');
const main = document.querySelector('#main');
const mainCoint = document.querySelector(`#main-container`);
const scoreCounter = document.querySelector('#score');
const questionMark = document.querySelector('#question-mark-div');
const again = document.querySelector('#again');
const highscoreCounter = document.querySelector('#highscore');


let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

check.addEventListener('click', () => {
    const number = input.value;
    if (number != randomNumber){
        if(number < randomNumber){
            score -= 1;
            scoreCounter.innerHTML = ` Score: ${score}`
            hint.innerText = `Too low!`;
        }
        if(number > randomNumber){
            score -= 1;
            scoreCounter.innerHTML = ` Score: ${score}`
            hint.innerText = `Too high!`;
        }
        if (score === 0) {
            hint.innerText = `Out of guesses! Answer: ${randomNumber}`
            main.style.backgroundColor = 'rgb(255, 102, 51)';
            mainCoint.style.backgroundColor = 'rgb(255, 102, 51)';
            input.style.backgroundColor = 'rgb(255, 102, 51)';
            check.style.display = `none`;
            questionMark.innerHTML = `${randomNumber}`;
        }
    }
    else{
        main.style.backgroundColor = 'rgb(98, 203, 98)';
        mainCoint.style.backgroundColor = 'rgb(98, 203, 98)';
        input.style.backgroundColor = 'rgb(98, 203, 98)';
        questionMark.innerHTML = `${randomNumber}`;
        hint.innerText = 'Correct!';
        check.style.display = `none`;
        input.style.pointerEvents = `none`;
        if(score > highscore){
            highscore = score;
            highscoreCounter.innerText = `Highscore: ${highscore}`
        }
}
input.value = '';
})
again.addEventListener(`click`, () => {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    main.style.backgroundColor = `rgb(54, 48, 48)`;
    mainCoint.style.backgroundColor = `rgb(54, 48, 48)`;
    input.style.backgroundColor = `rgb(54, 48, 48)`;
    questionMark.innerHTML = `?`;
    score = 20;
    scoreCounter.innerHTML = `Score: ${score}`;
    check.style.display = ``;
    input.style.pointerEvents = ``;
})



