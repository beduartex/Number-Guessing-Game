var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 0;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess <0 || user_guess >100 ){
        alert("Please enter a Number between 0 and 100");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed Numbers are: " + guessed_nums;
        }
        else if(user_guess > answer){
            msg1.textContent = "Your guess is too high."
            msg2.textContent = "No. of Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed Numbers are: " + guessed_nums;
        }
        else if(user_guess == answer){
            msg1.textContent = "Woah, You Got it!";
            msg2.textContent = "The Number was: " + answer;
            msg1.textContent = "You guessed it in " + no_of_guesses + " guesses!";
            document.getElementById("my_btn").disabled = true;
        }
    }

}









