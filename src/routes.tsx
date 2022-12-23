import LoginScreen from "./pages/LoginScreen/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoteBrowser from "pages/NoteBrowser"


const App = () => { 
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LoginScreen/>}/>
            
                <Route path={'/note/editor'} element={<NoteBrowser/>}/>
            </Routes>
        </BrowserRouter>
    ) }

export default App