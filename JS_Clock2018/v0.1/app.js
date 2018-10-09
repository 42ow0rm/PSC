//v0.1
function clearBoard(){
    let all_items = document.getElementsByTagName('td');
    for(let i = 0; i < all_items.length; i++){
        all_items[i].style.color = 'white';
    }
}

function printOnBoard(ClassName = ''){
    let getObj = document.getElementsByClassName(ClassName);
    for(let i = 0; i < getObj.length; i++){
        getObj[i].style.color = 'black';
    }
}

function printHour(h = 0, m = 0){
    // 1. Clear the board 
    clearBoard();

    // 2. Print alway needed
    printOnBoard('_es_ist');
    
    //Correction 24h en format 12h
    if(h>12){
        h = h - 12
    }
        
    // für m < 25 ist h, für m > 24 h + 1
    if(m>24){
        h++;
    }    
    // correct Minutes to 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55
    m = m - (m % 5);
    //console.log(m); 
    
    switch(h){
        case 1:
            if(m > 0){
                printOnBoard('_eins');
            }
            printOnBoard('_ein');
            break;
        case 2:
            printOnBoard('_zwei');
            break;
        case 3:
            printOnBoard('_drei');
            break;
        case 4:
            printOnBoard('_vier');
            break;
        case 5:
            printOnBoard('_fünf_2');
            printOnBoard('_fünf_2_elf');
            break;
        case 6:
            printOnBoard('_sechs');
            break;
        case 7:
            printOnBoard('_sieben');
            break;
        case 8:
            printOnBoard('_acht');
            break;
        case 9:
            printOnBoard('_neun');
            printOnBoard('_zehn_2_neun');
            break;
        case 10:
            printOnBoard('_zehn_2');
            printOnBoard('_zehn_2_neun');
            break;
        case 11:
            printOnBoard('_elf');
            printOnBoard('_fünf_2_elf');
            break;
        case 12:
            printOnBoard('_zölf');
            break;
    }

    switch(m){
        case 0:
            printOnBoard('_Uhr');
            break;
        case 5:
            printOnBoard('_fünf_1');
            printOnBoard('_nach');
            break;
        case 10:
            printOnBoard('_zehn_1');
            printOnBoard('_nach');
            break;
        case 15:
            printOnBoard('_viertel');
            printOnBoard('_nach');
            break;
        case 20:
            printOnBoard('_zwanzig');
            printOnBoard('_nach');
            break;
        case 25:
            printOnBoard('_fünf_1');
            printOnBoard('_vor');
            printOnBoard('_halb');
            break;
        case 30:
            printOnBoard('_halb');
            printOnBoard('_sechs + 1');
            break;
        case 35:
            printOnBoard('_fünf_1');
            printOnBoard('_nach');
            printOnBoard('_halb');
            break;
        case 40:
            printOnBoard('_zwanzig');
            printOnBoard('_vor');
            break;
        case 45:
            printOnBoard('_viertel');
            printOnBoard('_vor');
            break;
        case 50:
            printOnBoard('_zehn_1');
            printOnBoard('_vor');
            break;
        case 55:
            printOnBoard('_funf_1');
            printOnBoard('_vor');
            break;
    }
}

function startTime(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    console.log(h + ":" + m + ":" + s);

    printHour(h, m);

    t = setTimeout(function(){ startTime()}, 500);
}

startTime();


