// eserzio EMAIL---------

var indirizzi=[ 'luca@gmail.it', 'mario@gmail.it', 'giovanni@gmail.it'];
var utente=prompt('inserisci il tuo indirizzo gmail').toLocaleLowerCase();


// if (utente == 'luca@gmail.it'){
//     console.log('email corretta')
//     alert('email correta benvenuto/a')
// }
// else if (utente == 'mario@gmail.it'){
//     console.log('email corretta')
//     alert('email correta benvenuto/a')
// }
// else if (utente == 'giovanni@gmail.it'){
//     console.log('email corretta')
//     alert('email correta benvenuto/a')
// }
// else{
//     console.log('email non corretta')
//     alert('email non correta riprova')
// }
for(var i =0; i<indirizzi.length; i++){
    if(utente==indirizzi[i]){
        console.log('email corretta')
        alert('email correta benvenuto/a')
    }
    else{
        console.log('email non corretta')
        alert('email non correta riprova')
    }
}
// esecizio DADI--------------------------

