import LoginScreen from "./pages/LoginScreen/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoteBrowser from "pages/NoteBrowser"
import { useState } from "react";


const App = () => { 
    
    // const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");
    // const [redirectToLogin, setRedirectToLogin] = useState(false);
    // const [error, setError] = useState(false);

    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'}
                element={<LoginScreen
                    
                />}/>
            
                <Route path={'/note/editor'} element={<NoteBrowser/>}/>
            </Routes>
        </BrowserRouter>
    ) }

export default App