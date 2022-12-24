import NotesScreen from 'pages/NotesScreen';
import { Navigate } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute(children : JSX.Element) {
    
    if (localStorage.getItem('user')){        
      return children
    } else {
      return <Navigate to="/" />}
    }