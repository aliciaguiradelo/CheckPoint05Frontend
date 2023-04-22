import {Link} from 'react-router-dom'
import '../css/index.css'
import '../css/style.css'

function Nav(){
    
    return(
        <div id="menu">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/Feminino">Feminino</Link>
                </li>
                <li>
                    <Link to="/Masculino">Masculino</Link>
                </li>
                <li>
                    <Link to="/Infantil">Infantil</Link>
                </li>
                <li>
                    <Link to="/Pet">Pet</Link>
                </li>
            </ul>
        </div>
    );
}
export default Nav;