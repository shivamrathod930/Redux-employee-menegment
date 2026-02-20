import axios from 'axios'
const api = import.meta.env.VITE_MOKE_API


const axiosinstance = axios.create({
     baseURL: `https://${api}.mockapi.io/api/v1`,
     headers: {
          "Content-Type": "application/json",
     },
})

export default axiosinstance;