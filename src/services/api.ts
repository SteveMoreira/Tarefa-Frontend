import axios from 'axios'
const api = axios.create({
baseURL: 'https://tarefa-backenddd.herokuapp.com'
})
export default api;