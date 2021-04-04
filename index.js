console.log("hello, world");
//string commands[3] = ['rock', 'paper', 'scissors'];
//imp = prompt("Type Rock, Paper or Scissors");
rpc = [{'Position':'rock', 'wins':'scissors', 'loses': 'paper'},{'Position':'paper', 'wins':'rock', 'loses': 'scissors'},{'Position':'scissors', 'wins':'paper', 'loses': 'rock'}]
//1 -  Rock/ 2 - Paper / 3 - Scissors
function scoreUpdate(){
    var score = document.getElementById('score').innerHTML
    score ++;
    document.getElementById('score').innerHTML = score;
}
function randRPS (){
    var randRes = 3 * Math.random();
    var rps;
    //filtering random imputs
    if (randRes > 2){
        randRes = 3;
        rps = 'scissors';
    }
    else if(randRes > 1){
        randRes = 2;
        rps = 'paper';
    }
    else {
        randRes = 1;
        rps = 'rock'; 
    }
    return rps;
}
function rock(){
    var enemy = randRPS();
    alert("The House chose: "+ enemy);
    if  (enemy == 'rock'){
        alert('thats a tie');
    } 
    else if (enemy == 'paper'){
        alert('you lost');
    }
    else if (enemy == 'scissors'){
        alert('you won');
        scoreUpdate();
    }
    else{
        console.log('something wrong is not right');
    }
    return 0;
}
function paper(){
    var enemy = randRPS();
    alert("The House chose: "+ enemy);
    if  (enemy == 'paper'){
        alert('thats a tie');
    } 
    else if (enemy == 'scissors'){
        alert('you lost');
    }
    else if (enemy == 'rock'){
        alert('you won');
        scoreUpdate();
    }
    else{
        console.log('something wrong is not right');
    }
    return 0;
}
function scissors(){
    var enemy = randRPS();
    alert("The House chose: "+ enemy);
    if  (enemy == 'scissors'){
        alert('thats a tie');
    } 
    else if (enemy == 'rock'){
        alert('you lost');
    }
    else if (enemy == 'paper'){
        alert('you won');
        scoreUpdate();
    }
    else{
        console.log('something wrong is not right');
    }
    return 0;
}
function hideRules() {
    console.log("Chguei aqui");
    document.getElementById('rules').style.display = "none";
    return 0;
}
function showRules(){
    console.log("tbm cheguei");
    document.getElementById('rules').style.display = "block";
}
document.addEventListener("DOMContentLoaded",hideRules);

