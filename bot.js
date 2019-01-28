const Commando = require("discord.js-commando");
const discord = require("discord.js");
const Bot = new Commando.Client();
const TOKEN = "NTM4ODEwOTc0OTc5ODgzMDE5.Dy5Q7w.oulQXqEHDHkr2iIrrovNq4a65XY"


Bot.on("message", function(message){
if (message.content =="Hello")
{
    message.reply("hello how are you?");
}


Bot.on("ready", function(){
console.log("!Bot activated!");
})


Bot.login(process.env.TOKEN);
