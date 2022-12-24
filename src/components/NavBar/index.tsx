import './NavBar.modules.scss'
import { TbGridDots } from "react-icons/tb";
import {VscSettingsGear} from "react-icons/vsc";
import {IoIosArrowDown} from "react-icons/io"
import {TbLogout} from 'react-icons/tb'
import UsersService from 'services/users';
import { IisLogged } from 'interfaces/isLogged';



const NavBar = (props :IisLogged) => {

    function LogOffOperation() {
        UsersService.logout()
        props.setIsLoggedIn(false)         
    }
         

    return(
        <nav>
            <div className={"menu"}>
                <TbGridDots size={24}/>
                <h5>ServerNote</h5>
            </div>
            <div className={"folder"}>
                <p>Nome da Nota Ativa</p>
                <IoIosArrowDown size={20}/>

            </div>
            <VscSettingsGear size={20}/>                
                    { props.isLoggedIn ?
                    <div className={"user"}>
                        <div>
                            <p>Nome do User</p>
                                <div onClick={() => LogOffOperation()}>
                                    <TbLogout size={20}/>
                                    <p>LogOut</p>
                                </div>
                        </div>
                    </div>
                    :
                        ''
                   }           
       
            
        </nav>
        
    )}

    export default NavBar