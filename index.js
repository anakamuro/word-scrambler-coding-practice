const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
let inplay = false;
let scramble = "";
let scrambled = "";
let score = 0;
const myArray = ["javascript", "website", "html", "document", "course", "new"];

button.addEventListener("click", function(){
    console.log("clicked")
    if(!inplay){
        inplay = true;
        score = 0;
        button.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        scramble = createWord();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;
    } else {
        let tempGuess = guess.value;
        score++;
        if(tempGuess === scramble){
            console.log("correct")
            inplay = false;
            message.innerHTML = "Correct it was " + scramble + " it took " + score + "guesses";
            button.innerHTML = "Start";
            guess.classList.toggle("hidden")
        } else {
            console.log("guess again");
            message.innerHTML = "Wrong " + scrambled;
        }
    }
})

function createWord(){
    let randomIndex = Math.floor(Math.random()* myArray.length);
    let temnpWord = myArray[randomIndex];
    return temnpWord;
}

function randomArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}