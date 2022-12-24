import NotesScreen from 'pages/NotesScreen';
import { Navigate } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute(children : any) {
    
    if (localStorage.getItem('user')){        
      return <NotesScreen/>
    } else {
      return <Navigate to="/" />}
    }