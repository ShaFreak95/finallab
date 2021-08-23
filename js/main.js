//Menu Bar
document.querySelector("#mobile-bar-cta").addEventListener("click", function() {
    document.querySelector(".mobile-menu-container").style.display = "block";
    document.querySelector(".mobile-menu").classList.toggle("show-menu", true);
    document.querySelector(".mobile-menu").classList.toggle("hide-menu", false);
    // setTimeout(function() {
    //     document.querySelector(".mobile-menu").classList.toggle("animate__backInRight", true);
    //     document.querySelector(".mobile-menu").classList.toggle("animate__backOutRight", false);
    // }, 1000);
})

document.querySelector("#close_btn").addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("show-menu", true);
    document.querySelector(".mobile-menu").classList.toggle("hide-menu", false);
    document.querySelector(".mobile-menu-container").style.display = "none";
    // setTimeout(function() {
    //     document.querySelector(".mobile-menu").classList.toggle("show-menu", true);
    //     document.querySelector(".mobile-menu").classList.toggle("hide-menu", false);
    // }, 800);
})

//Fun Game Logic
let randomNumber = 0;
let digitNumberIncrement = 10; //Each level, the digit will increase by one
let currentLevel = 1;

document.querySelector("#start_btn").addEventListener("click", function() {
    startGame();
})

document.querySelector("#submit_btn").addEventListener("click", function() {
    let userInput = document.querySelector("#user_input").value; //Get the answer from user

    //Comparing answer gave by user and real answer
    if (userInput == randomNumber) {
        // console.log("Congrats, you are right!");
        alert("CORRECT!! Onto the next round!");
        nextGame();
    }
    else {
        alert("Bububu, wrong answer!!");
    }
})

function startGame() {
    //not displaying the asnwer input box until atfer 5 seconds
    document.querySelector(".game-menu").style.display = "none"
    document.querySelector(".game-container").classList.add("start-game");
    document.querySelector(".answer").style.display = "none";

    //getting the random number
    randomNumber = Math.floor(Math.random() * 10);
    // console.log(randomNumber);
    let stringRandomNumber = parseInt(randomNumber);
    document.querySelector("span").innerText = currentLevel;
    document.querySelector("#generated_number").value = stringRandomNumber;

    //timer for the displayed answer for user to guess
    setTimeout(function() {
        document.querySelector("#generated_number").style.display = "none";
        document.querySelector(".answer").style.display = "block";
    }, 2000)
}

function nextGame() {
    document.querySelector("#generated_number").style.display = "initial";
    document.querySelector(".answer").style.display = "none";

    currentLevel = ++currentLevel;
    document.querySelector("span").innerText = currentLevel;
    // console.log(currentLevel);

    digitNumberIncrement = digitNumberIncrement * 10;
    randomNumber = Math.floor(Math.random() * digitNumberIncrement);
    // console.log(randomNumber);
    let stringRandomNumber = parseInt(randomNumber);
    document.querySelector("#generated_number").value = stringRandomNumber;

    setTimeout(function() {
        document.querySelector("#generated_number").style.display = "none";
        document.querySelector(".answer").style.display = "block";
    }, 2000)
}