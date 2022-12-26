import { IisLogged } from 'interfaces/isLogged'
import EmailAndPassword from './Login'
import './LoginScreen.modules.scss'
import Register from './Register'
import { useNavigate, redirect } from 'react-router-dom'

const Login = ( props: IisLogged ) =>
{

  return (
    <section className={ "Login" }>
      <EmailAndPassword isLoggedIn={ props.isLoggedIn } setIsLoggedIn={ props.setIsLoggedIn } />
      {/* <Register isLoggedIn={ props.isLoggedIn } setIsLoggedIn={ props.setIsLoggedIn } /> */}
    </section>
  )
}
export default Login