// importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import cors from 'cors'
//app config
const app = express()
const port = process.env.PORT || 9000
const pusher = new Pusher({
    appId: "1321278",
    key: "0a3c26149df588744c42",
    secret: "8b3501689e34cb9fea11",
    cluster: "us2",
    useTLS: true
  });
//middleware
app.use(express.json());
app.use(cors());
//DB config
const connection_url ='mongodb+srv://anton:etKbezRL9WMM6a9@cluster0.uqldt.mongodb.net/whatsappdb?retryWrites=true&w=majority'
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