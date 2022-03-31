

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


var turno=1;
function playerClick(casellaCliccata){ 
    if(turno == 1){playerOne(casellaCliccata); turno=2; return}
    if(turno == 2){playerTwo(casellaCliccata); turno=1;}
    
}
function playerOne(casellaCliccata){
    scriviCasellaX(casellaCliccata);
}
function playerTwo(casellaCliccata){
    scriviCasellaO(casellaCliccata);
}

function scriviCasellaX(casellaCliccata){
    document.getElementById(casellaCliccata).innerText="X";
}
function scriviCasellaO(casellaCliccata){
    document.getElementById(casellaCliccata).innerText="O";
}