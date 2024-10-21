/*


*/

/*1-Escreva uma função que recebe uma mensagem e o nome do arquivo por parâmetros e salva a mensagem em um arquivo TXT.
const fs = require("fs").promises;

async function alterarMensagem(mensagem) {

try {
    await fs.writeFile('teste.txt',mensagem)
    console.log ("Sucesso");
          
} catch (error) {
    console.log("Erro");
}

}

alterarMensagem("01234567899876543210");
*/



/*
2-Escreva uma função que faz a cópia de um arquivo adicionando a extensão ".bkp" no nome do mesmo. Se o novo arquivo já existe, uma mensagem de erro deve ser informado na tela. O caminho do arquivo original é informado por parâmetro.
const fs = require("fs").promises;
const path = require("path");

async function criarBackup(caminho) {
    try {
        const caminhoBackup = caminho + ".bkp";

        
        try {
            await fs.access(caminhoBackup);
            console.log("Erro: O arquivo de backup já existe.");
            return;
        } catch (error) {
           
        }

        
        await fs.copyFile(caminho, caminhoBackup);
        console.log("Arquivo copiado com sucesso para:", caminhoBackup);
    } catch (error) {
        console.log("Erro ao copiar o arquivo:", error.message);
    }
}
criarBackup("Aula-Arquivos\teste.txt");

*/









/*
3-Escreva uma função que lê o conteúdo de um arquivo de texto e retorne  a quantidade de linhas que o arquivo possui. O nome do arquivo é informado por parâmetro.

*/