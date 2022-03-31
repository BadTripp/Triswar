//                                              0  1  2
//                                              3  4  5
//                                              6  7  8
//  Tris win 
//  048
//  246
//  036
//  147
//  258
//  012
//  345
//  678


// Variabili
let restartBtn = document.getElementById('restartBtn');
let celleTotali = 8;
let turno = 'playerOne';


// Cambio turno fra players
function playerClick(casellaCliccata) {
    if (turno == 'playerOne') { playerOne(casellaCliccata); turno = 'playerTwo'; return }
    if (turno == 'playerTwo') { playerTwo(casellaCliccata); turno = 'playerOne'; }
}

function controlloSpam(casellaCliccata) {
    for (i = 0; i <= celleTotali; i++) {
        document.getElementById(casellaCliccata).onclick = "";
    }
}



//  Ogni player scrive su una cella e non può ricliccaci se già selezionata
function playerOne(casellaCliccata) {
    controlloSpam(casellaCliccata);
    scriviCasella(casellaCliccata);
}

function playerTwo(casellaCliccata) {
    controlloSpam(casellaCliccata);
    scriviCasella(casellaCliccata);
}



// Al click scrive una X/O nelle celle
function scriviCasella(casellaCliccata) {
    if(turno == 'playerOne') {
        document.getElementById(casellaCliccata).innerText = "X";
    }
    else {
        document.getElementById(casellaCliccata).innerText = "O";
    }
}



// Al click del button restart, azzera il gioco
restartBtn.addEventListener('click', function () {
    for (i = 0; i <= celleTotali; i++) {
        document.getElementById(i).innerHTML = '';
    }
});