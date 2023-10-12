import axios from "axios";

const camisetasAPI = axios.create({baseURL: "http://localhost:8000/camisetas"})

async function getCamisetas() {
    const response = await camisetasAPI.get('/')
    return response.data
}

export {
    getCamisetas
}