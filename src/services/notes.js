import Api from './api'

const NotesService = {
  index : () => Api.get('/notes/view',{
    headers: {'x-access-token' : localStorage.getItem('token') }
  }),

  create: () => Api.post('/notes/create', {
      'title' : "Nova Nota",
      'body' : "Anote aqui..."},
  { headers: {'x-access-token' : localStorage.getItem('token') }
  }),

  delete: (id) => Api.delete(`/notes/delete/${id}`, {
    headers: {'x-access-token' : localStorage.getItem('token') }
}),

  open: (id) => Api.get(`/notes/view/${id}`, {
    headers: {'x-access-token' : localStorage.getItem('token') }
  }),

  update: (id, params) => Api.put(`/notes/edit/${id}`, params, {
    headers: {'x-access-token' : localStorage.getItem('token') }
  })


  


}

export default NotesService