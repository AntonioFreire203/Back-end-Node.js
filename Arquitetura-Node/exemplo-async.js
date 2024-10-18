
async function outraFuncaoAssincrona() {
    return "função assincrona";
    
}

async function funcaoAssincrona() {
    return await outraFuncaoAssincrona() ;    
}


async function star(){

let funcao = await funcaoAssincrona();
console.log(funcao);

}

star();