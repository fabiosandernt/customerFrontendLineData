import axios from "axios";

export const api =  axios.create({
    baseURL: "https://localhost:7119/api",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    },
});

export const createSession = async (email, password) => {
    return api.post("/Authentication", {email, password});
};

export const salvarCadastroCliente = async (data) => {
    return api.post('/Cliente', data);
}

export const listarCadastroCliente = async () => {
    return api.get("/Cliente")
};