import Api from './api'

const NotesService = {
  index : () => Api.get('/notes/view',{
    headers: {'x-access-token' : localStorage.getItem('token') }
  }),
}

export default NotesService