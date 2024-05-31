const showscore = document.querySelector('.score');
const Showhighscore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const randomNumber = Math.floor(Math.random() * 20) + 1;
let current_score = 20;
let highscore = 0;

document.querySelector('.again').onclick = function () {
    reset();
}

const reset = () => {
    current_score = 20;
    showscore.textContent = current_score;
    document.querySelector('input.guess').value = "";
    Showhighscore.textContent = highscore;
    message.textContent = "Start guessing..."

}

document.getElementById('check').onclick = function () {
    //    alert(randomNumber)
    let userGuess = parseInt(document.querySelector('input.guess').value);

    if (userGuess >= 1 && userGuess <= 20) {
        if (userGuess === randomNumber) {
            message.textContent = "Correct"
            if (current_score > highscore) {
                highscore = current_score;
                Showhighscore.textContent = highscore;
            }
        } else {
            current_score -= 1;
            showscore.textContent = current_score;
            if (current_score === 0) {
                alert("Game over! Resetting game.");
                reset();
            }
            if (userGuess > randomNumber) {
                message.textContent = "too high"
            } else {
                message.textContent = "too low"
            }

        }
    } else {
        alert("The number must be from 1 to 20 only.");
    }
};
