import axios  from "axios"

const api = axios.create({
  // baseURL : "https://mentoons-master-backend.onrender.com",
  // baseURL: "https://mentoons-backend-production.onrender.com",
  // baseURL : "http://localhost:3001"
  baseURL : "https://mentoons-website-backend.onrender.com"
});

api.interceptors.request.use(

    function (config){
       
        return config;
    }

)
api.interceptors.request.use(

)
export default api;