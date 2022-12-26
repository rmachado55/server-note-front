
import { IisLogged } from 'interfaces/isLogged';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import UsersService from 'services/users';

const EmailAndPassword = ( props: IisLogged ) =>
{

  const navigate = useNavigate()
  const [ email, setEmail ] = useState( 'heisenberg@crystals.com' )
  const [ password, setPassword ] = useState( 'apenasteste' )


  const HandleSubmit = async ( evt: any ) =>
  {
    evt.preventDefault();
    try{
      const user = await UsersService.login( {
        email: email,
        password: password,
      } )
      props.setIsLoggedIn( true )
      navigate( "/notes" )
    } catch ( error )
    {
      alert( "Login ou Senha inválidos" )
    }


  }

  return (
    <div className={ "Box" }>
      <h2>Login</h2>
      <Form onSubmit={ HandleSubmit }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Endereço de E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail."
            value={ email }
            onChange={ e => setEmail( e.target.value ) }
          />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={ password }
            onChange={ e => setPassword( e.target.value ) }
          />
        </Form.Group>        
        <Form.Group>
          <Button
            variant="primary"
            type="submit"

          >
            Entrar
          </Button>
        </Form.Group>

      </Form>
    </div>
  )
}

export default EmailAndPassword

