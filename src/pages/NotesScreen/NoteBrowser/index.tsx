import { Inotes } from "interfaces/notes"
import NoteList from "./NoteItem"
import { AxiosResponse } from "axios"
import { Dispatch, SetStateAction } from "react"
import NoteItem from "./NoteItem"


const NoteBrowser = (props : {
                      notes : [Inotes],
                      setNotes : Dispatch<SetStateAction<undefined>>,
                      selectedNote : number,
                      setSelectedNote : Dispatch<SetStateAction<number>>
                    }) => {


return (
  
  <div>    
    {props.notes.map((Notes, index) => {    
      return(
        <div
          key={Notes.title.toString()}
          onClick={() => props.setSelectedNote(index)}
        >
          <NoteItem
            title={Notes.title.toString()}
            index={index}
            date={Notes.updated_at}            
          />
        </div>
      )
    }
  )
 }
  </div>
)}

export default NoteBrowser