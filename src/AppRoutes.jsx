import React, { Children, useContext } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CadastroPage from "./pages/CadastroPage";
import ListarCadastroPage from "./pages/ListarCadastroPage";

import { AuthProvider, AuthContext } from "./contexts/auth";


const AppRoutes = () => {    

    const Private =({children}) => {
        const {authenticated, loading } = useContext(AuthContext);
        if(loading){
            return <div className="loading">Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to="/login" />;
        }
        return children;
    };
    return(
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>     
                <Route exact path="/" element={<Private><HomePage/></Private>}/>   
                <Route exact path="/cadastro" element={<Private><CadastroPage/></Private>}/>
                <Route exact path="/listar" element={<Private><ListarCadastroPage/></Private>}/>
            </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;