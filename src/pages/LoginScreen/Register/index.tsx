import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

const Register = () => {

return(
  <div className={"Box"}>
  <h2>Registrar-se</h2>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Nome Completo</Form.Label>
    <Form.Control placeholder="Nome Completo" />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" placeholder="Digite seu e-mail. Ou se preferir, utilize o login teste123" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Crie uma senha simples, apenas para testar a funcionalidade" />
  </Form.Group>  
  <Button variant="primary" type="submit">
    Criar usuário
  </Button>
</Form>  
</div>
)
}

export default Register

