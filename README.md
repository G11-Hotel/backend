Questa repository contiene il codice del backend del progetto BellHotel. 
Dentro la cartella vi è la parte di lavoro incentrata sulle API, ossia: 

- Sviluppo
- Testing
- Documentazione

**Come avviare il progetto**
Il backend è live all'indirizzo: //inserire indirzzo. Qui è possibile solo eseguire le richieste agli API endpoint e visualizzare la documentazione.

Se il backend dovesse essere offline, è possibile eseguire il progetto in locale seguendo questi passi:

1) Clonare il progetto
2) Eseguire 'cd backend' per entrare nella cartella di backend
3) Definire un file '.env' nel quale definire le seguenti variabili d'ambiente:
   'mongodb_uri="" ' , 'PORT="" '
4) Eseguire 'npm install' per installare le librerie del progetto
5) Eseguire 'npm start' per avviare il programma localmente

Per visualizzare la documentazione in locale è necessario sostituire al nome dell'host 'localhost:${port}' nel file './app.ts'. Sarà poi possibile eseguire i test delle API mediante software come Postman 
