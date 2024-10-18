/*
---função js em callback realizada de maneira sync
*/

function enviarEmailClientesInadimplentes() {
    let  i=0 ;
    while (i<100) {
        console.log(" Enviando email para o Cliente Inadimplente",i++);
    }
}

function enviarEmailPromocinal() {
    let  i=0 ;
    while (i<100) {
        console.log(" Enviando email promocial",i++);
    }
}

function main(){
    enviarEmailClientesInadimplentes();
    enviarEmailPromocinal();
}

main();