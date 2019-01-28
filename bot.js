const Commando = require("discord.js-commando");
const discord = require("discord.js");
const Bot = new Commando.Client();



Bot.on("message", function(message){
if (message.content =="Hello")
{
    message.reply("hello how are you?");
}



Bot.login(process.env.BOT_TOKEN);
