//Qui richiediamo la libreria di discord.js in seguito installata con il comando **npm install discord.js** ovviamente nel terminale

const Discord = require('discord.js');

//Qui definiamo il client con la **C** maiuscola quindi ogni client che se si a creare sarà obbligatorialmente con la **C** Maiuscola
const Client = new Discord.Client();

//Qui richiediamo di prendere le informazioni all'interno della cartella **config.json** come il **Token** o il **Prefix** così da avere piu ordire essendo che è una cosa opzionale e non obbligatoria
const config = require('./config.json');

//Qui definiamo **fs**
const fs = require('fs');

//Questa riga serve per far leggere/definire il .**set**, questa riga è fondamentale perchè senza di essa il bot non potrebbe funzionare
Client.commands = new Discord.Collection();

//Qui diamo il prefisso al bot attraverso il file **config.json**
const prefix = config.prefix;

//Qui diamo vita al bot, stabiliamo il suo token per attivarlo sempre attraverso il file **config.json**
Client.login(config.token);

//Qui stampiamo in console un messaggio dove ci avvisa che il bot è andato online con successo
Client.once('ready', () => {
    console.log("fammi una sega");
})

//Qui stabiliamo lo status del bot cioè quello che sta facendo
const status = [
    `mangiando i funghi di dani`
];

let index = 0;
setInterval(() => {
    if(index === status.length) index = 0;
    const status2 = status[index];

Client.user.setActivity(status2, { type: "PLAYING"}).catch(console.error)
index++;
}, 7500)

//Qui diamo al bot la possibilità di rispondere ai comandi che scriviamo in chat
const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);
}

Client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//Qui inizializziamo ogni comando attraverso il nome del comando che abbiamo messo nel **module.exports**
    if(command === 'misuicido'){
        Client.commands.get('misuicido').execute(Client, message, args, Discord);
    }
    else if(command === 'help'){
            Client.commands.get('help').execute(Client, message, args, Discord);
 }
 else if(command === 'avatar'){
    Client.commands.get('avatar').execute(Client, message, args, Discord);
}
else if(command === 'kick'){
    Client.commands.get('kick').execute(Client, message, args, Discord);
}
})