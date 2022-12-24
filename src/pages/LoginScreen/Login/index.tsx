
import { IisLogged } from 'interface/isLogged';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import UsersService from 'service/users';

const EmailAndPassword = (props : IisLogged) =>
{

  const navigate = useNavigate()
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( 'teste123' )


  const HandleSubmit = async ( evt: any ) =>
  {
    evt.preventDefault();
    try
    {
      const user = await UsersService.login( {
        email: email,
        password: password,
      })
       props.setIsLoggedIn(true)
       navigate("/notes")
     } catch ( error ){
      alert(error)
    }
    

  }

    return(
        <div className={ "Box" }>
          <h2>Login</h2>
          <Form onSubmit={ HandleSubmit }>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Endereço de E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu e-mail. Ou se preferir, utilize o login teste123"
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
                placeholder="Digite sua senha. Ou se preferir, utilize teste123"
                value={ password }
                onChange={ e => setPassword( e.target.value ) }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembrar da senha" />
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
    )} 
  
export default EmailAndPassword

