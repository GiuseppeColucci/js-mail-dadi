// eserzio EMAIL---------

var indirizzi=[ "luca@gmail.it", "mario@gmail.it", "giovanni@gmail.it"];
var utente=prompt('inserisci il tuo indirizzo gmail').toLocaleLowerCase();
var accountEsistente=false;

for(var i =0; i<indirizzi.length; i++){
    if(utente==indirizzi[i]){
        accountEsistente=true;
    }

}

if (accountEsistente == true){
    console.log('email corretta');
    alert('email correta benvenuto/a');
}
else {
    alert('email non esistente');
}




