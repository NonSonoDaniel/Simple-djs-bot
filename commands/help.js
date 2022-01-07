//Richiediamo Discord.js e il MessageEmbed
const { MessageEmbed } = require('discord.js')

//Creiamo il module.exports
module.exports = {
    name: 'help',
    description: 'vedi la lista comandi',
    async execute(Client, message, args, Discord){
  
  //Qui creiamo l'embed per l'help comandi che aggiorneremo man mano andremo avanti
  const help = new Discord.MessageEmbed()
  .setTitle('help')
  .setColor('GREEN')
  .setDescription('Elenco dei comandi:')
  .addFields(
      {name: 'help', value: 'Manda la seguente lista comandi'},
      {name: 'misuicido', value: 'Comando per suicidarsi'},
  )
  
  //Qui indine diciamo al bot di inviare l'embed **help** nel canale dove è stato eseguito il comando
  message.channel.send(help)
        
    }
}