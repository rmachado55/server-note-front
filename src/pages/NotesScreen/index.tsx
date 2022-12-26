import NotesService from 'services/notes'
import NoteEditor from './NoteEditor'
import { Dispatch, SetStateAction, useEffect} from 'react'
import { Inotes } from 'interfaces/notes'
import { AxiosResponse } from 'axios'
import { GrNotes } from 'react-icons/gr'
import { MdOutlineDeleteForever } from 'react-icons/md'
import './NotesScreen.modules.scss'
import Button from 'react-bootstrap/Button';
import { VscNewFile } from 'react-icons/vsc'

const NotesScreen = ( props : {
            notes : [Inotes],
            setNotes : Dispatch<SetStateAction<[Inotes]>>,
            currentNote : Inotes,
            setCurrentNote : Dispatch<SetStateAction<Inotes>>,
                            }) => {


const createNote = async () => {
    await NotesService.create();
    fetchNotes();
}

const selectNote = (id : string) => {
    const note = NotesService.open((note : Inotes) => {
    return note._id === id})
}

const deleteNote = (_id : string) => {
    NotesService.delete(_id.toString())
    fetchNotes()
}

const updateNote = async (oldNote : Inotes, params : any) => {
    const updatedNote = await NotesService.update(oldNote._id, params);
    const index = props.notes.indexOf(oldNote)
    const newNotes = props.notes;
    props.setNotes(newNotes);
    props.setCurrentNote(updatedNote.data)
}

async function fetchNotes() {

    const response = await NotesService.index();
        if(response.data.length >=1){
            props.setNotes(response.data.reverse())
            props.setCurrentNote(response.data[0])
        } else {
            createNote()
            props.setCurrentNote(response.data[0])
        }
}   


    useEffect(() =>{
        fetchNotes()
    },[props.notes])

    console.log(props.currentNote)

return (    
        <section>
        {/* Browser */}
   
        <div>    
        <button
            onClick={createNote}
            type="button"
            className="btn btn-outline-secondary">
            <VscNewFile/>Criar nova Nota
        </button>
        {props.notes.map((Note, index) => {
        return(<div className={'NoteBrowser'}>
            <div
            className={'NoteItem'}
            key={index}            
            >
                <div
                    className="NoteLabel" 
                    onClick={() => props.setCurrentNote(Note)}>
                    <GrNotes size={20}/>
                    {Note.title.toString()}
                </div>
                <div className="btn-group-sm"
                role="group">
                    
                        
                <Button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteNote(Note._id.toString())}>
                    <MdOutlineDeleteForever size={20}/>
                </Button>      
                </div>                
            </div>
            
            
            </div>
            )})}                
        </div>
        {/* Title */}
        <div>
            <h3 className={'Title'}>{props.currentNote.title}</h3>
        </div>
        
        <NoteEditor
            note={props.currentNote}
            updateNote={updateNote}    
        />
    </section>
    )
}

export default NotesScreen