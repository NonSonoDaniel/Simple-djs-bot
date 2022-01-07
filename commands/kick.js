//Qui richiediamo Discord.js e MessageEmbed
const { MessageEmbed } = require('discord.js');

//Qui creiamo il module.exports
module.exports = {
    name: 'kick',
    description: 'Espelli un utente',
    async execute(Client, message, args, Discord){

        //in queste 2 righe di codice semplifichiamo la riga (message.member;) con **autore** e (message.mentions.members.first();) con **target** Ricordo che questo è un passaggio facoltativo e non obbligatorio
        const autore = message.member;
        const target = message.mentions.members.first();

        //Qui diciamo al bot di controllare se l'utente che ha fatto il comando ha il permesso di *Espellere utenti*, se l'utente non dispone del permesso il bot gli risponderà con (non disponi del permesso necessario per espellere l'utente)
        if(!message.member.hasPermission("KICK_MEMBERS")); return message.channel.send('non disponi del permesso necessario per espellere l\'utente')



    }
}