# Tutto quello che c'è da sapere sul bot

Iniziamo dalle basi del bot creando i file:

**index.js**, il cuore del bot, lì gestiremo ogni file.js dalla creazione fino all'attivazione del comando vero e proprio.

**config.json**, in questo file metteremo tutte le configurazioni che ci potranno servire per semplificare il nostro bot, per esempio possiamo inserire il nostro token e il nostro prefisso, dei canali dove vogliamo che il bot invii dei messaggi e così via.

**Commands**, questa cartella contiene tutti i comandi che il bot inviarà una volta che li richiederemo.

invece per il file **package-lock.json** la cosa è diversa, lì non toccheremo mai nulla essendo che al suo interno ci sono delle righe di codice essenziali per il funzionamento del bot.

il file **package.json**, in se al suo interno ci sono le cose inerenti alle librerie installate e alle info del bot.

e infine la cartella **node_modules**, questa cartella è il contenimento di tutta la libreria di **node.js**, non bisogna toccarla per nessun motivo.


i comandi a disposizione al momento sono:

**Avatar**, Invia l'avatar del proprio profilo oppure se taggato un utente, dell'utente taggato.

**help**, invia la lista comandi.

**kick**, Espelle un utente si si ha il permesso.

**misuicido**, Comando per divertimento con una frase.