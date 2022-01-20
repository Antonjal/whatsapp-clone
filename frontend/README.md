# Running the frontend step-by-step:

1. Setup and Run the **backend** server first! The instructions are provided in the **<a href="https://github.com/Antonjal/whatsapp-clone/tree/master/backend">backend directory</a>**
2. In the **master branch**, inside the **<a href="https://github.com/Antonjal/whatsapp-clone/blob/master/frontend/src/App.js">App.js</a>** file, under the **second** `useEffect()`, **change** the pusher **key number**(0a3c26149df588744c42) and the `cluster` value to those of yours
3. Inside the **<a href="https://github.com/Antonjal/whatsapp-clone/blob/master/frontend/src/axios.js">axios.js</a>** file, under `baseURL`, **change** the value from `'https://whatsapp-mern-clone.onrender.com'` to `'http://localhost:9000'` or any other address your **backend** server is running on!
4. Run `npm install`
5. Run `npm start`
6. This will mimic **"Johnny"**
7. Do steps **2** to **5** for the **second branch**. This branch mimics **"Anastasia"**
