import LoginScreen from "./pages/LoginScreen/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotesScreen from "pages/NotesScreen"
import { useState } from "react";
import NavBar from "components/NavBar";
import Login from "./pages/LoginScreen/index";
import { PrivateRoute } from "components/PrivateRoute";

const App = () => { 
    
    const [ error, setError ] = useState( false )
    const [ isLoggedIn, setIsLoggedIn ] = useState( false )
  

    return(<>
        <NavBar/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>            
            <Route path="/notes" element={<PrivateRoute><NotesScreen/></PrivateRoute>} />
        </Routes>
        </BrowserRouter>              
        </>)
}

export default App