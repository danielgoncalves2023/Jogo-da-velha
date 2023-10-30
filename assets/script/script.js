const pos1 = document.getElementById('pos1');
const pos2 = document.getElementById('pos2');
const pos3 = document.getElementById('pos3');
const pos4 = document.getElementById('pos4');
const pos5 = document.getElementById('pos5');
const pos6 = document.getElementById('pos6');
const pos7 = document.getElementById('pos7');
const pos8 = document.getElementById('pos8');
const pos9 = document.getElementById('pos9');
var winX = document.getElementById('winX');
var winO = document.getElementById('winO');
var countWinX = 0;
var countWinO = 0;
var current = 'X';
var avisoWin = document.getElementById('avisoWin');

function validateWin(){
    if(pos1.textContent == 'X' && pos2.textContent == 'X' && pos3.textContent == 'X'){
        avisoWin.innerHTML = "'X' Venceu!";
        avisoWin.style.display = "grid";
        countWinX++;
        stopGame();
    } else if (pos4.textContent == 'X' && pos5.textContent == 'X' && pos6.textContent == 'X'){
        avisoWin.innerHTML = "'X' Venceu!";
        avisoWin.style.display = "grid";
        countWinX++;
        stopGame();
    } else if (pos7.textContent == 'X' && pos8.textContent == 'X' && pos9.textContent == 'X'){
        avisoWin.innerHTML = "'X' Venceu!";
        avisoWin.style.display = "grid";
        countWinX++;
        stopGame();
    } else if (pos1.textContent == 'X' && pos4.textContent == 'X' && pos7.textContent == 'X'){
        avisoWin.innerHTML = "'X' Venceu!";
        avisoWin.style.display = "grid";
        countWinX++;
        stopGame();
    } else if (pos2.textContent == 'X' && pos5.textContent == 'X' && pos8.textContent == 'X'){
        avisoWin.innerHTML = "'X' Venceu!";
        avisoWin.style.display = "grid";
        countWinX++;
        stopGame();
    } else if (pos3.textContent == 'X' && pos6.textContent == 'X' && pos9.textContent == 'X'){
        avisoWin.innerHTML = "'X' Venceu!";
        avisoWin.style.display = "grid";
        countWinX++;
        stopGame();
    } else if (pos1.textContent == 'X' && pos5.textContent == 'X' && pos9.textContent == 'X'){
        avisoWin.innerHTML = "'X' Venceu!";
        avisoWin.style.display = "grid";
        countWinX++;
        stopGame();
    } else if (pos3.textContent == 'X' && pos5.textContent == 'X' && pos7.textContent == 'X'){
        avisoWin.innerHTML = "'X' Venceu!";
        avisoWin.style.display = "grid";
        countWinX++;
        stopGame();
    } else if(pos1.textContent == 'O' && pos2.textContent == 'O' && pos3.textContent == 'O'){
        avisoWin.innerHTML = "'O' Venceu!";
        avisoWin.style.display = "grid";
        countWinO++;
        stopGame();
    } else if (pos4.textContent == 'O' && pos5.textContent == 'O' && pos6.textContent == 'O'){
        avisoWin.innerHTML = "'O' Venceu!";
        avisoWin.style.display = "grid";
        countWinO++;
        stopGame();
    } else if (pos7.textContent == 'O' && pos8.textContent == 'O' && pos9.textContent == 'O'){
        avisoWin.innerHTML = "'O' Venceu!";
        avisoWin.style.display = "grid";
        countWinO++;
        stopGame();
    } else if (pos1.textContent == 'O' && pos4.textContent == 'O' && pos7.textContent == 'O'){
        avisoWin.innerHTML = "'O' Venceu!";
        avisoWin.style.display = "grid";
        countWinO++;
        stopGame();
    } else if (pos2.textContent == 'O' && pos5.textContent == 'O' && pos8.textContent == 'O'){
        avisoWin.innerHTML = "'O' Venceu!";
        avisoWin.style.display = "grid";
        countWinO++;
        stopGame();
    } else if (pos3.textContent == 'O' && pos6.textContent == 'O' && pos9.textContent == 'O'){
        avisoWin.innerHTML = "'O' Venceu!";
        avisoWin.style.display = "grid";
        countWinO++;
        stopGame();
    } else if (pos1.textContent == 'O' && pos5.textContent == 'O' && pos9.textContent == 'O'){
        avisoWin.innerHTML = "'O' Venceu!";
        avisoWin.style.display = "grid";
        countWinO++;
        stopGame();
    } else if (pos3.textContent == 'O' && pos5.textContent == 'O' && pos7.textContent == 'O'){
        avisoWin.innerHTML = "'O' Venceu!";
        avisoWin.style.display = "grid";
        countWinO++;
        stopGame();  
    } else if (pos1.textContent != "" && pos2.textContent != "" && pos3.textContent != ""
    && pos4.textContent != "" && pos5.textContent != "" && pos6.textContent != ""
    && pos7.textContent != "" && pos8.textContent != "" && pos9.textContent != ""){
        avisoWin.innerHTML = "Deu velha! Empate.";
        avisoWin.style.display = "grid";
        stopGame();
    }

    winX.innerHTML = countWinX;
    winO.innerHTML = countWinO;
}

function choose (pos) {
    if(current == 'X') {
        pos.innerHTML = 'X';
        current = 'O';
    } else {
        pos.innerHTML = 'O';
        current = 'X';
    }

    validateWin();
    pos.removeAttribute('onclick')
}

function stopGame() {
    pos1.removeAttribute('onclick');
    pos2.removeAttribute('onclick');
    pos3.removeAttribute('onclick');
    pos4.removeAttribute('onclick');
    pos5.removeAttribute('onclick');
    pos6.removeAttribute('onclick');
    pos7.removeAttribute('onclick');
    pos8.removeAttribute('onclick');
    pos9.removeAttribute('onclick');
}

function restart() {
    pos1.innerText = "";
    pos1.setAttribute('onclick', 'choose(pos1)');
    pos2.innerText = "";
    pos2.setAttribute('onclick', 'choose(pos2)');
    pos3.innerText = "";
    pos3.setAttribute('onclick', 'choose(pos3)');
    pos4.innerText = "";
    pos4.setAttribute('onclick', 'choose(pos4)');
    pos5.innerText = "";
    pos5.setAttribute('onclick', 'choose(pos5)');
    pos6.innerText = "";
    pos6.setAttribute('onclick', 'choose(pos6)');
    pos7.innerText = "";
    pos7.setAttribute('onclick', 'choose(pos7)');
    pos8.innerText = "";
    pos8.setAttribute('onclick', 'choose(pos8)');
    pos9.innerText = "";
    pos9.setAttribute('onclick', 'choose(pos9)');

    current = 'X';
    avisoWin.innerHTML = "";
    avisoWin.style.display = "none";
}

function cleanCount() {
    countWinO = 0;
    countWinX = 0;

    winX.innerHTML = countWinX;
    winO.innerHTML = countWinO;
}