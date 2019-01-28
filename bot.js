const Commando = require("discord.js-commando");
const discord = require("discord.js");
const Bot = new Commando.Client();



Bot.on("message", function(message){
if (message.content =="Hello")
{
    message.reply("hello how are you?");
}


Bot.on("ready", function(){
console.log("!Bot activated!");
})


Bot.login(process.env.BOT_TOKEN);
