

async function enviarEmailClientesInadimplentes() {
    let date = new Date ();
    let  i=0 ;
    while (i<100) {
        console.log(" Enviando email para o Cliente Inadimplente",i++);
        await new Promise (resolve => setTimeout(resolve,500));
    }
    console.log('  o processo inadimplente demorou', new  Date()- date, 'ms');
}

async function enviarEmailPromocinal() {
    let date = new Date ();
    let  i=0 ;
    while (i<100) {
        console.log(" Enviando email promocial",i++);
        await new Promise (resolve => setTimeout(resolve,5));
    }
    console.log(' o processo  promocional demorou', new  Date()- date, 'ms');
}

async function main(){
    await enviarEmailClientesInadimplentes();
    await enviarEmailPromocinal();
}

main();