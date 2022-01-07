//Richiediamo Discord.js per iniziare a vedere cosa sono i MessageEmbed
const { Client, Message, MessageEmbed } = require('discord.js');

//Facciamo il module.exports
module.exports = {
    name: 'avatar',
    description: 'Mostra l\'avatar dell\'utente',
    async execute(Client, message, args, Discord){

        //Qui abbreviamo tutta la riga di codice (message.mentions.members.first() || message.member;) in un semplice **member**
        const member = message.mentions.members.first() || message.member;

        //Qui diamo vita al vero e proprio embed con le diverse impostazioni
        const avatar = new MessageEmbed()
        .setTitle(`${member.user.tag}'s avatar`)
        .setColor('RED')
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))

        //Qui infine diciamo al bot di inviare l'embed **avatar** nel canale dove è stato fatto il comando.
        message.channel.send(avatar)

    }
}