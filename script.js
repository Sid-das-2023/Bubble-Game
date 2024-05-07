var timer = 60;
var score = 0;
var hitrn = 0;


function makeBubble() {
    var clutter = "";

for(var i = 0; i < 78; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble"> ${rn}
    </div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
    var timerint = setInterval(function() {
    if(timer > 0) {
    timer--;
    document.querySelector("#timerval").textContent = timer;
    }
    else {
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER </h1>`;
    }
    }, 1000);
}

function increaseScore() {
    score += hitrn;
    document.querySelector("#scoreval").textContent = score;
    getNewHit();
    makeBubble();
}
document.querySelector("#pbtm").addEventListener("click", function(details) {
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn) {
        increaseScore();
    }
});
runTimer();
makeBubble();
getNewHit();