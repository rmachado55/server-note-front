import { GrNotes } from 'react-icons/gr'
import { Moment } from 'moment';
import 'moment/locale/pt-br';

const NoteItem = (props : {title : string, index : number, date : string}) => {



return (
<div>
  <GrNotes size={12}/>
  <span>{props.title}</span>  
</div>
)
}

export default NoteItem