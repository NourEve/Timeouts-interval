let myStopwatch = setInterval(myTimer, 100);
let i = 0;
function myTimer(){
    let newSecond = document.getElementById('timerDisplay');
    let newTxt = document.getElementById('timerTxt');
    newSecond.innerHTML = i;
    i++;
    if (i == 60) {
        newTxt.textContent='a minute has passed';
    }
    else if (i > 60 && ((i % 60)==0)){
        time = (i/60);
        newTxt.textContent= (time + ' minutes have passed');
    }
}

