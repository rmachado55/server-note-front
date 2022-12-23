import './NavBar.modules.scss'
import { TbGridDots } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";
import {VscSettingsGear, VscBell} from "react-icons/vsc";
import {IoIosArrowDown} from "react-icons/io"


const NavBar = () => {
    
    
    return(
        <nav>
            <div className={"menu"}>
                <TbGridDots size={24}/>
                <h5>ServerNote</h5>
            </div>
            <div className={"folder"}>
                <p>FolderName</p>
                <IoIosArrowDown size={20}/>

            </div>
            <div className={"user"}>
                <div>
                    <IoDiamondOutline size={20}/>
                    <p>Mais sobre este DEV</p>
                </div>
                <VscSettingsGear size={20}/>
                <VscBell size={20}/>
                
            </div>
        </nav>
        
    )}

    export default NavBar