//Use fs.readFile() method to read 
const fs = require("fs")
/*
fs.readFile('Demo.txt','utf8',function(err,data) {
    console.log(data);
})
*/

/*
fs.appendFile("Demo.txt", "Bem-vindo a arquivos \n", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("\n Arquivo alterado com Sucesso \n",
            fs.readFileSync("Demo.txt", "utf8"));
    }
}); 


*/


/*
fs.writeFile("Demo.txt", "\nalterando essa porra , vai corintia\n", (err) => {
    if (err) console.log(err);
    else {
       console.log ("Sucesso");
        console.log(fs.readFileSync("Demo.txt", "utf8"));
    }
});
*/


fs.unlink()

