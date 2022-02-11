// const workTime = document.getElementsByName("workTime")[0];
// workTime.addEventListener("keydown", function(event) {
//     document.getElementsByName("workTime")[0].value = event.target.value
// });

// parseInt(document.getElementsByName("workTime")[0].value);
let workTime = parseInt(document.getElementsByName("workTime")[0].value);
let time = workTime;
let roundsComplete = 1;
let roundsTotal = parseInt(document.getElementsByName("rounds")[0].value);
let gameStart = false;
let interval = 1000

function countDown() {
    const timer = setInterval(function() {
        document.getElementById("time").innerHTML = time + "s";
        document.getElementById("rounds").innerHTML =  roundsComplete + "/" + roundsTotal;
        if (roundsComplete == roundsTotal && time == 0) {
            clearInterval(timer)
        } else if (time == 0) {
            roundsComplete += 1;
            time += workTime
        };
        time -= 1;
    }, 1000);
} 


const startButton = document.getElementById("start");
startButton.addEventListener("click", countDown);



// reset timer once seconds reaches 0
// function updateTimeRound() {
//     time -= 1;
//     if (roundsComplete > roundsTotal) {
//         clearInterval(countDown)
//     };
//     if (time == 0){
//         roundsComplete += 1;
//         time += workTime
//     };
// };
