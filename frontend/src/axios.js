import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://whatsapp-mern-clone.onrender.com'
})

export default instance;
