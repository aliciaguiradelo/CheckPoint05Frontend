import {Link} from 'react-router-dom'
import '../index.css'
import '../Componentes/css/style.css'

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
                    <Link to="/Pets">Pets</Link>
                </li>
            </ul>
        </div>
    );
}
export default Nav;