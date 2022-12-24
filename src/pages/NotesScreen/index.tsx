import NotesService from 'services/notes'
import NoteBrowser from './NoteBrowser'
import NoteEditor from './NoteEditor'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Inotes } from 'interfaces/notes'

const NotesScreen = ( props : {
            notes : [Inotes],
            setNotes : Dispatch<SetStateAction<undefined>>,
            selectedNote : number,
            setSelectedNote : Dispatch<SetStateAction<number>>}) => {

    async function fetchNotes() {
        const response = await NotesService.index();
            if(response.data.length >=1){
                props.setNotes(response.data.reverse())
                props.setSelectedNote(response.data[0])
            } else { alert('Não foi possível carregar as notas')}
    }
        
    useEffect(() =>{
        fetchNotes()
    },[])

    return(
    <>
        <NoteBrowser
            notes={props.notes}
            setNotes={props.setNotes}
            selectedNote={props.selectedNote}
            setSelectedNote={props.setSelectedNote}
        />
        <NoteEditor/>
    </>
        )
}

export default NotesScreen