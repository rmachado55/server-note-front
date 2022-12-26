import NotesScreen from 'pages/NotesScreen';
import React from 'react';
import { Navigate } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute(props : any) {
    
    if (localStorage.getItem('user')){        
      return props.children
    } else {
      return <Navigate to="/" />}
    }