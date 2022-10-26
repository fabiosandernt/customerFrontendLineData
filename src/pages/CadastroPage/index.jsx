import React, { useState, useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import './styles.css'

import { salvarCadastroCliente } from "../../services/api"

const CadastroPage = () => {
    
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rua, setRua] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [sexo, setSexo] = useState(0);
    const [dataNascimento, setDataNascimento] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        // console.log("submit", {nome, endereco})
    }

    const {logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    const dataCadastro = { 
        nome: nome,
        cpf: {
            numero: cpf
        },
        endereco: {
            nomeEndereco: rua,
            cidade: cidade,
            estado: estado
        },
        sexo: Number(sexo),
        nascimento: dataNascimento
    }

    const handleSave = () => {
        if(!dataCadastro) return;

        salvarCadastroCliente(dataCadastro)
    }
 
    return  (
        <div id="cadastro">
            <h1 className="="title="">Cadastro do Cliente</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="nome">Nome</label>
                    <input 
                    type="nome" 
                    name="nome" 
                    id="nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)}
                    />                    
                </div>
                <div className="field">
                    <label htmlFor="cpf">CPF</label>
                    <input 
                    type="text" 
                    name="cpf" 
                    id="cpf" 
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    />                    
                </div>
                <div className="field">
                    <label htmlFor="rua">Rua</label>
                    <input 
                    type="text" 
                    name="rua" 
                    id="rua" 
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                    />                    
                </div>
                <div className="field">
                    <label htmlFor="cpf">Cidade</label>
                    <input 
                    type="text" 
                    name="cidade" 
                    id="cidade" 
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    />                    
                </div>
                <div className="field">
                    <label htmlFor="estado">Estado</label>
                    <input 
                    type="text" 
                    name="estado" 
                    id="estado" 
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    />                    
                </div>
                <div className="field">
                    <label htmlFor="cpf">Sexo</label>
                    <input 
                    type="number" 
                    name="sexo" 
                    id="sexo" 
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    />                    
                </div>
                <div className="field">
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input 
                    type="date"
                    name="dataNascimento"
                    id="dataNascimento"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    />                    
                </div>
                <div className="actions">
                    <button type="submit" onClick={handleSave}>Salvar</button>
                </div>
                <div className="actions">
                <button onClick={handleLogout}>Logout</button>
                </div>
            </form>
        </div>
    ) 
}

export default CadastroPage;