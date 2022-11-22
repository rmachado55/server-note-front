import LoginScreen from "./pages/LoginScreen/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => { 
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LoginScreen/>}/>
            </Routes>
        </BrowserRouter>
    ) }

export default App