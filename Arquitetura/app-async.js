/*
---> Entender o papel das funções assincronas em js é tarefa fundamental
    
    a) Antes de pensar sobre se assincro ou sicrono , uma questão  é fundamental  é pensar se a parte do codigo 
    que estou implementando precisa que todo o processo seja executado ou não . De forma partica :
    1.a) Se estamos fazendo um consulta no banco de dados precisamos "aguardar" que isso aconteça logo temos que 
    ter um comportamento "await"

*/

const { resolve } = require("path");

async function enviarEmailClientesInadimplentes() {
    let date = new Date ();
    let  i=0 ;
    while (i<500) {
        console.log(" Enviando email para o Cliente Inadimplente",i++);
        await new Promise (resolve => setTimeout(resolve,500))
    }
    console.log('  o processo inadimplente demorou', new  Date()- date, 'ms')
}


async  function enviarEmailPromocinal() {
    let  i=0 ;
    let date = new Date ();
    while (i<500) {
        console.log(" Enviando email promocial",i++);
        await new Promise (resolve => setTimeout(resolve,5))
    }
    console.log(' o processo  promocional demorou', new  Date()- date, 'ms')
}

async function main(){
    await enviarEmailClientesInadimplentes();
    await enviarEmailPromocinal();
}

main();

