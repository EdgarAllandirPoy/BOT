const discord = require("discord.js")
const cliente = new discord.Client()

cliente.on('ready', ()=> {
console.log("logado")
})

cliente.on('message', (message) => {
    if (message.content === "oi"){
        message.reply("Salve o Imperador!")
    }
})

cliente.login('MTE2MzgzMTcxNzg2NjUwODQxOA.G6k6BN.TTTBjmupCLHXg8B2pl-7SGx4wsxhBBkozsRKVg')