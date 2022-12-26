import Api from "./api";

const UsersService = {
  register : (params : any) => {
    Api.post('/users/register', params);    
  },
  
  login: async (params : any) => {
    const response = await Api.post('/users/login', params);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', response.data.token);
  },

  logout : () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}

export default UsersService