import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginScreen = () => {
    
    return(
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de E-mail</Form.Label>
        <Form.Control type="email" placeholder="Digite seu e-mail. Ou se preferir, utilize o login teste123" />
        <Form.Text className="text-muted">
          Caso não seja cadastrado, clique em cadastrar. Caso não queira, apenas utilize um login de teste senha teste
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha. Ou se preferir, utilize teste123" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar da senha" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    )
}

export default LoginScreen