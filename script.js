var form = document.getElementById("form");

var guessField = document.getElementById("guessField");
const last_guess = document.getElementById("last_guess");
const high_or_low = document.getElementById("high-or-low");
var temp__guess__count = document.getElementById("temp__guess__count")
var errorMessage = document.getElementById("test");

var btn_check = document.getElementById("check");


var guess_count = 0;



function hideForm() {
    form.style.visibility = "visible";
}

var Random_number = Math.floor(Math.random() * 100) + 1;


guessField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {

        document.getElementById("check").click();
    }
});

function checkGuess() {


    var current_guess = Number(guessField.value);

    if (guess_count < 10) {

        try {

            if (current_guess == "") throw "The input is empty";
            if (Number.isNaN(current_guess)) throw "Input is not a number. Please enter a number";


            if (current_guess <= 100 && current_guess >= 1) {

                if (current_guess < Random_number) {
                    last_guess.textContent += current_guess + " | ";
                    high_or_low.textContent = "Your Guess is too Low";
                    high_or_low.classList.add("wrong");
                    guess_count++;
                    guessField.value = '';
                    errorMessage.textContent = "";

                    temp__guess__count.textContent = "Attempts: " + guess_count + " out of 10";
                } else if (current_guess > Random_number) {
                    last_guess.textContent += current_guess + " | ";
                    high_or_low.textContent = "Your Guess is too High";
                    high_or_low.classList.add("wrong");
                    guess_count++;
                    guessField.value = '';
                    errorMessage.textContent = "";
                    temp__guess__count.textContent = "Attempts: " + guess_count + " out of 10";
                } else {
                    last_guess.textContent += current_guess + " | ";
                    high_or_low.classList.add("success");
                    btn_check.disabled = true;
                    guessField.disabled = true;
                    high_or_low.textContent = "Success, you Won the game! You can start again. ";
                    guessField.value = '';
                    errorMessage.textContent = "";

                }
            } else {
                guessField.value = '';
                errorMessage.classList.add("wrong")
                errorMessage.textContent = "Please, enter a number from 1 to 100";

            }

        } catch (err) {
            errorMessage.classList.add("wrong")
            errorMessage.textContent = err;


        }
    }else {
        errorMessage.textContent = "You lost! Please, try again."
        errorMessage.classList.add("wrong")
        guessField.value = ":(";
    }
}