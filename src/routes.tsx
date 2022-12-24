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
    const [notes , setNotes] = useState<any>([])
    const [selectedNote, setSelectedNote] = useState(0)
  

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
                        selectedNote = {selectedNote}
                        setSelectedNote = {setSelectedNote}
                    />
                </PrivateRoute>} />
        </Routes>
        </BrowserRouter>              
        </>)
}

export default App