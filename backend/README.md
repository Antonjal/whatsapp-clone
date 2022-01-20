# Setting UP and running the backend step-by-step:
1. Create an account on **https://www.pusher.com**. Under **Channels**, create an app and pick **React** as the frontend and **node.js** as the backend
2. Create an account on **https://www.mongodb.com**. Under **Databases**, create a new **Shared Cluster**.
3. inside the **.env.sample** file, replace the **DB_USERNAME**, **DB_PASSWORD**, **PUSHER_APP_ID**, **PUSHER_SECRET** and **PUSHER_CLUSTER** with your respective **<a href="https://www.pusher.com">Pusher</a>** and **<a href="https://www.mongodb.com">MongoDB</a>** credentials. As per **PUSHER_USE_TLS**, assign it to `true`. (No quotation marks required for any of them!)
4. Rename the **.env.sample** file to **.env**
5. Run `npm install`
6. Run `node server.js`
7. Now go read the instructions in the **<a href="https://github.com/Antonjal/whatsapp-clone/tree/master/frontend">frontend directory</a>** to get the project up and running!
