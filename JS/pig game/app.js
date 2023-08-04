let finalScore  = document.querySelector('#finalScore');
const roleDice = document.querySelector('.dice');
const imageSet = document.querySelector('.diceImage');
const currentScoreLeft = document.querySelector('#main .left_div .scoreDiv p');
const currentScoreRight = document.querySelector('#main .right_div .scoreDiv p');
const setCurrentScoreInLeftDiv = document.querySelector('.left_div h2');
const setCurrentScoreInRightDiv =document.querySelector('.right_div h2');
const notNumber = document.querySelector('.button p');
const buttons = document.querySelector('.button');
const newGame = document.querySelector('.newGame');
const btnHold = document.querySelector('.hold');
const left_div = document.querySelector('.left_div');
const right_div = document.querySelector('.right_div');

let currentScoreLeftValue = 0,
    currentScoreRightValue = 0,
    one=true,
    diceHold=true,
    setcurrentScoreLeft = 0, 
    setcurrentScoreRight = 0;

    
// For win we need number
let scoreToRich = prompt("Enter a number for play game");
finalScore.innerHTML = scoreToRich;

// checking that prompt is not empty
if(scoreToRich == null || scoreToRich == '' || scoreToRich <=0){
    btnHold.disabled = true;
    roleDice.disabled = true;
    notNumber.innerHTML = 'Please Enter Some Positive Value';
    buttons.style.left = '37%';
}
else{
    // Random Funcnality and player change
    roleDice.addEventListener('click',()=>{
        // Random Number Generate
        let randomNumber = Math.trunc(Math.random() * 6) + 1;
        // console.log(randomNumber);

        //set image Randmaly
        imageSet.src=`image/${randomNumber}.svg`;

        // Adding current score to left div and Right Div
        if(one && diceHold == true){
            if(randomNumber == 1){
                one = false;
                currentScoreLeft.innerHTML = 0;
                currentScoreLeftValue  = 0;
                left_div.style.backgroundColor = '#BB7A96';
                right_div.style.backgroundColor = '#D9AEBD';
                diceHold  = false;
            }
            else{
                currentScoreLeftValue = currentScoreLeftValue + randomNumber;
                currentScoreLeft.innerHTML = currentScoreLeftValue;
            }
        }
        else{
            
            if(randomNumber == 1){
                one = true;
                currentScoreRight.innerHTML = 0;
                currentScoreRightValue = 0;
                left_div.style.backgroundColor = '#D9AEBD';
                right_div.style.backgroundColor = '#BB7A96';
                diceHold = true;
            }
            else{
                currentScoreRightValue = currentScoreRightValue + randomNumber;
                currentScoreRight.innerHTML = currentScoreRightValue;
            }
        }
    })

// clicking on hold button and give chance to another player

btnHold.addEventListener('click',()=>{
    if(diceHold == true){
        left_div.style.backgroundColor = '#BB7A96';
        right_div.style.backgroundColor = '#D9AEBD';
        setcurrentScoreLeft = setcurrentScoreLeft + currentScoreLeftValue;
        setCurrentScoreInLeftDiv.innerHTML = setcurrentScoreLeft;
        currentScoreLeft.innerHTML = 0;
        currentScoreLeftValue = 0;
        diceHold = false;
        one = false;
        winner();
    }
    else{
        left_div.style.backgroundColor = '#D9AEBD';
        right_div.style.backgroundColor = '#BB7A96';
        setcurrentScoreRight = setcurrentScoreRight + currentScoreRightValue;
        setCurrentScoreInRightDiv.innerHTML = setcurrentScoreRight;
        currentScoreRight.innerHTML = 0;
        currentScoreRightValue = 0
        diceHold = true;
        one = true;
        winner();
    }
})

// Winner
function winner(){
    if(setcurrentScoreLeft >= scoreToRich){
        // console.log("player One Win");
        disabl("leftWin");
    }
    if(setcurrentScoreRight >= scoreToRich){
        // console.log("player 2 win");
        disabl("rightWin");
    }
}
// After win the match
function disabl(values){
    btnHold.disabled = true;
    roleDice.disabled = true;
    imageSet.src='image/dice.png';
    if (values == "leftWin") {
        setCurrentScoreInLeftDiv.style.fontSize = '30px';
        setCurrentScoreInLeftDiv.innerHTML = "🎉 You Win 🎉"
    }
    else{
        setCurrentScoreInRightDiv.style.fontSize = '30px';
        setCurrentScoreInRightDiv.innerHTML = "🎉 You Win 🎉"
    }
}
}

// Starting New Game
newGame.addEventListener('click',()=>{
    location.reload();
})
