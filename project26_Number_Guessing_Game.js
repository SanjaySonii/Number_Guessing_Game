let n, num;
let numguess = 0;
let guessBtn = document.getElementsByTagName(`button`);
let welcoming = document.getElementsByClassName(`welcoming`);
let guesses = document.getElementById(`guesses`);
let result = document.getElementById(`result`);
let input = document.getElementById(`input`);
n = parseInt(1 + 99 * Math.random());
console.log(n);

guessBtn[0].addEventListener(`click`,(e)=>{
    e.preventDefault();
    num = input.value;
    numguess++;
    if(num == n){
        welcoming[0].innerHTML = `<h1>Congratulation!</h1>`;
        result.innerHTML = `<h2>You Guess the number in ${numguess} attempts</h2>`
    }
    else if(num < n){
        result.innerHTML = `<h2>Higher number please</h2>`
    }
    else if(num > n){
        result.innerHTML = `<h2>Lower number please</h2>`
    }
    guesses.innerHTML = `<h2>Number of guesses : ${numguess}</h2>`
})
