
import EmailAndPassword from './EmailAndPassword'
import './LoginScreen.modules.scss'
import Register from './Register'

const LoginScreen = () => {  
    

    return(
      <section className={"LoginScreen"}>
        <EmailAndPassword />
        <Register/>
    
    </section>
    )
}

export default LoginScreen