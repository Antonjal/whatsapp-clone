// importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import cors from 'cors'
import {} from 'dotenv/config'
//app config
const app = express()
const port = process.env.PORT || 9000
const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
    useTLS: process.env.PUSHER_USE_TLS
  });
//middleware
app.use(express.json());
app.use(cors());
//DB config
const connection_url =`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uqldt.mongodb.net/whatsappdb?retryWrites=true&w=majority`
mongoose.connect(connection_url)

const db = mongoose.connection;

db.once("open", () => {
    console.log("DB connected!")

    const messageCollection = db.collection("messagecontents");
    const changeStream = messageCollection.watch();


    changeStream.on("change", (change) => {
        console.log("A change occured", change);
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',
                {
                    name: messageDetails.name,
                    message: messageDetails.message,
                    timestamp: messageDetails.timestamp,
                    received: messageDetails.received
                }
            );
        }
        else
        {
            console.log('Error trigerring pusher')
        }

        
    });
});

// api routes

app.get('/',(req,res) => res.status(200).send("Hello World"))
app.get('/messages/sync',(req,res) => {

    Messages.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})
app.post('/messages/new',(req,res) => {

    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})
//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
