import EmailAndPassword from './Login'
import './LoginScreen.modules.scss'
import Register from './Register'

const Login = () => {  
    

    return(
      <section className={"Login"}>
        <EmailAndPassword />
        <Register/>    
      </section>
    )
}

export default Login