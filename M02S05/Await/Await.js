
//Exemplo de await:
async function saudAsync() {
    return saudacao = await Promise.resolve("oi!");
}

saudAsync().then(console.log);