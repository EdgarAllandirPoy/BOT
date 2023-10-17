import { Client, IntentsBitField, Message } from "discord.js";
import * as dotenv from "dotenv"
dotenv.config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ]
})

 client.on('ready', () => {
    console.log("No ar")
 })

 client.on('messageCreate', (message) => {
    if(message.author.bot) return
    if(message.content == "oi") {
        message.reply("O Credo Imperial me guia, banindo toda dúvida ou arrependimento, pois o Deus-Imperador está conosco e senti a pureza da Sua retidão, testemunhei Sua glória dissipando as trevas, vi a ferocidade indomável do Império ser desencadeada sobre os seus incontáveis ​​inimigos, a coragem e honra demonstradas em nome do Imperador, a lealdade e a justiça inabaláveis ​​que Ele inspirou, e que nenhuma fortaleza poderia resistir à ira do Imperador, nenhuma fúria poderia superar Sua proteção, pois a luz do Imperador purifica até a corrupção mais sombria, desfaz até a maldição mais forte e Sua glória traz salvação para aqueles que abraçam Seus ideais. Até mesmo aos Decaídos é oferecida uma chance de redenção a serviço do Imperador, através da morte, do sacrifício, do dever, da honra. Isto é o que o Imperador exige de nós. LOUVADO SEJA O IMPERADOR!!!!") 
    }
 })

 client.login(process.env.TOKEN)