const inputValue = document.querySelector('input');
const checkBtn = document.querySelector('.check');
const h3 = document.querySelector('h3');
const bgColor = document.querySelectorAll(".bgColor");
const questionMark = document.querySelector(".questionMark");
let score = document.querySelector("#score");
let highScore = document.querySelector("#HighScore");
let again = document.querySelector(".again");
let middle = document.querySelector("#middle p");

let randomValue,updatedScoreValue = 0, highScoreValue = 0;
let scoresNumber = parseInt(score.innerText);
middle.style.display = 'none';
function randomNumber(){
    randomValue = Math.floor(Math.random() * 20 ) + 1;
    console.log("Random Number = "+randomValue);
}
randomNumber()


checkBtn.addEventListener('click',()=>{
    scores();
    let getValue = inputValue.value;

    if(getValue == randomValue){
        h3.style.color = "#fff";
        h3.innerText = "🎉 Correct Number";
        for (let index = 0; index < bgColor.length; index++) {
            bgColor[index].style.backgroundColor = '#04AA6D';
        }
        questionMark.innerText = getValue;

        if(highScoreValue >= updatedScoreValue){
            highScore.innerText = (score.innerText);
        }
    }
    else if(getValue == "" || getValue < 1 || getValue > 20){
        h3.innerText = "😭 Please Enter 1 to 20 Number";
        h3.style.color = "#D94F3F";
    }
    else{
        h3.style.color = "#fff";
        randomValue > getValue? h3.innerText ="📉 Your Number is Low" : h3.innerText ="📈 Your Number is High";
    }
    
    inputValue.value = '';
})
function scores(){
    score.innerText = scoresNumber--;
    highScoreValue = score.innerText;
    if(score.innerText == 0){
        checkBtn.style.pointerEvents = 'none';
        middle.style.display = 'block';
    }
}
again.addEventListener('click',()=>{
    
    againClick();

})

function againClick(){
    randomNumber();
    scores();
    checkBtn.style.pointerEvents = 'visible';
    middle.style.display = 'none';
    questionMark.innerText = "?";
    updatedScoreValue = highScore.innerText;
    score.innerText = "20";
    scoresNumber = 20;
    h3.innerText = "🤔 Start Guessing.....";
    for (let index = 0; index < bgColor.length; index++) {
        bgColor[index].style.backgroundColor = '#000';
    }
    h3.style.color = "#fff";
}