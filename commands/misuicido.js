//Qui creiamo il nostro comando, il **module.exports** serve a creare il comando con il nome e le funzioni che dovrà usare
module.exports = {
    name: 'misuicido',
    description: 'quella persona lo vorrebbe',
    async execute(Client, message, args, Discord){

        
        

        //Qui diciamo che una volta fatto il comando, il bot dovrà inviare nel canale in cui è stato eseguito il comando il messaggio sottocitato
        message.channel.send('Ok, vado a prendere la pistola, un secchio pieno d\'acqua e il mocio.')
        
    }
}