import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

const Register = () => {

return(
  <div className={"Box"}>
  <h2>Criar usuário</h2>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
      <Row>
        <Col>
          <Form.Control placeholder="Nome" />
        </Col>
        <Col>
          <Form.Control placeholder="Sobrenome" />
        </Col>
      </Row>
    </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Endereço de E-mail</Form.Label>
    <Form.Control type="email" placeholder="Digite seu e-mail. Ou se preferir, utilize o login teste123" />
    <Form.Text className="text-muted">
      Não enviareI nenhum tipo de propaganda. Utilize apenas para testar a funcionalidade, se desejar.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Crie uma senha simples, apenas para testar a funcionalidade" />
  </Form.Group>  
  <Button variant="primary" type="submit">
    Criar
  </Button>
</Form>  
</div>
)
}

export default Register

