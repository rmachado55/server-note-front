import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotesScreen from "pages/NotesScreen"
import { useState } from "react";
import NavBar from "components/NavBar";
import Login from "./pages/LoginScreen/index";
import { PrivateRoute } from "components/PrivateRoute";
import { Inotes } from "interfaces/notes";

const App = () => { 
    
    const [ isLoggedIn, setIsLoggedIn ] = useState( false )
    const [notes , setNotes] = useState<any>([])
    const [currentNote, setCurrentNote] = useState<any>([])
  

    return(<>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>            
            <Route path="/notes" element={
                <PrivateRoute>
                    <NotesScreen
                        notes = {notes}
                        setNotes = {setNotes}                        
                        currentNote = {currentNote}
                        setCurrentNote = {setCurrentNote}
                    />
                </PrivateRoute>
            } />
        </Routes>
        </BrowserRouter>              
        </>)
}

export default App