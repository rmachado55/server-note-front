import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import UsersService from 'services/users';
import EmailAndPassword from '../Login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IisLogged } from 'interfaces/isLogged';

const Register = (props: IisLogged ) => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const HandleSubmit = async (evt : any) => {

  const navigate = useNavigate()

  evt.preventDefault();
  try{
    const user = await UsersService.register({name : name, email : email, password: password});       
    UsersService.login( {
      email: email,
      password: password,
    } )
    props.setIsLoggedIn(true)
    navigate( "/notes" )

    
  } catch (error) {
  
  }


}

return(
  <div className={"Box"}>
  <h2>Registrar-se</h2>
  <Form onSubmit={HandleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Nome Completo</Form.Label>
    <Form.Control
      placeholder="Nome Completo"
      value = {name}
      onChange = {(e) => setName(e.target.value)} />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>E-mail</Form.Label>
  <Form.Control
    type="email"
    placeholder="Digite seu e-mail."
    value = {email}
    onChange = {(e) => setEmail(e.target.value)}
  />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control
      type="password"
      placeholder="Crie uma senha"
      value = {password}
      onChange = {(e) => setPassword(e.target.value)}/>
  </Form.Group>  
  <Button variant="primary" type="submit">
    Criar usuário
  </Button>
</Form>  
</div>
)
}

export default Register

