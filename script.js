'use strict';
let randomizedNumber = parseInt(Math.random() * 10);
// console.log(randomizedNumber);
let highScore = Number(document.getElementById('high-score').innerText);
let trial = 0;
let score;
let left = 4;

function scoreCalculation(trial) {
    if (trial === 1) {
        score = 40
    } else if (trial === 2) {
        score = 30
    } else if (trial === 3) {
        score = 20
    } else if (trial === 4) {
        score = 10
    } else if (trial === 0) {
        score = 0
    } else {
        score = 0
    }
    return score
}

function highScoreCalculation(highScore, score) {
    if (highScore > score) return highScore
    else {
        highScore = score
        // console.log(highScore)
        return highScore
    }
}

document.getElementById("check").addEventListener("click", function () {
    const value = Number(document.getElementById("number").value);

    if (value < 0) {
        alert("Please enter guessing number!")
    } else if (value > 20) {
        alert("Please enter number between 1 to 20!")
    }
    else {
        if (randomizedNumber === value) {
            trial++
            left--
            scoreCalculation(trial)
            document.getElementById('result').innerText = value
            document.getElementById('hints').innerText = "Correct guess"
            document.getElementById('left').innerText = left
            document.getElementById('score').innerText = score
            // console.log(score, highScore)
            document.getElementById('high-score').innerText = highScoreCalculation(highScore, score)
        } else if (randomizedNumber !== value) {
            if (randomizedNumber < value) {
                if (left > 0) {
                    left--
                    trial++
                    document.getElementById('left').innerText = left
                    document.getElementById('hints').innerText = `try less than ${value}`
                } else {
                    alert("you are out of your try!")
                }
            } else {
                if (left > 0) {
                    left--
                    trial++
                    document.getElementById('left').innerText = left
                    document.getElementById('hints').innerText = `try getter than ${value}`
                } else {
                    alert("you are out of your try!")
                }
            }
        }
    }
})


document.getElementById("GuessAgain").addEventListener("click", function () {
    randomizedNumber = parseInt(Math.random() * 10)
    // console.log(randomizedNumber)
    // console.log(highScore)
    left = 4
    document.getElementById('hints').innerText = "choose a number between 0 to 10";
    document.getElementById("number").value = "";
    document.getElementById('left').innerText = 4;
    document.getElementById('score').innerText = 0;
})