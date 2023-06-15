// select all of the elements
const resetBtn = document.querySelector('.again')
const num = document.querySelector('.number')
const checkBtn = document.querySelector('.check')
const msg = document.querySelector('.message')
// get usrs value

//generate a secret num between 1 and 20
let score = 20;
let highScore = 0
//generate random numbers
let secretNum = Math.trunc(Math.random() * 20 + 1);

checkBtn.addEventListener('click', ()=>{
    const guess = Number(document.querySelector('.guess').value);
if (!guess) {
    msg.textContent = "No Number Selected"
} else if (guess === secretNum){
    msg.textContent = 'CORRECT NUMBER';
    document.querySelector('body').style.backgroundColor = 'green';
num.textContent = secretNum;
if (score >= highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore
}
} else if(guess !== secretNum){
    if (score > 1) {
        msg.textContent = guess > secretNum ?'TOO HIGH' : 'TOO LOW'
        score--;
        document.querySelector('.score').textContent = score;   
    } else {
        msg.textContent = 'YOU HAVE LOST';
        document.querySelector('.score').textContent =0;
        document.querySelector('.body').style.backgroundColor = "red"
    }
}
});

resetBtn.addEventListener('click', ()=>{
    score = 20
    //random num
    secretNum = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = 'black'
    msg.textContent = 'START GUESSING'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''


})


