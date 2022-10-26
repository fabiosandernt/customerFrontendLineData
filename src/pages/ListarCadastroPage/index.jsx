import React, { useState, useContext, useEffect} from "react";
import { AuthContext } from "../../contexts/auth";

import { Container } from "react-bootstrap";

import './styles.css'

import { listarCadastroCliente } from "../../services/api"

import axios from 'axios';

const ListarCadastroPage = () => {
    
    const [clientes, setClientes] = useState();
        
    useEffect(() => {
        const fetchData = async () => {
            const response = listarCadastroCliente()
            const jsonResult = JSON.stringify(response.data);
            console.log(jsonResult)
            
            setClientes(jsonResult);

            return jsonResult
        }

        const result = fetchData()
            .catch(console.error);

        console.log(fetchData())
    }, [clientes])

    return (
        <Container>
            <h1> Listagem Clientes </h1>
        </Container>
    );
}

export default ListarCadastroPage;