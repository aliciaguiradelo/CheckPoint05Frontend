import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Componentes/Home'
import Feminino from './Componentes/Feminino'
import Masculino from './Componentes/Masculino'
import Nav from './Componentes/Nav'
import Footer from './Componentes/Footer'
import Infantil from './Componentes/Infantil'
import Pets from './Componentes/Pets'

function App() {   
return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Feminino" element={<Feminino/>}/>
          <Route path="/Masculino" element={<Masculino/>}/>
          <Route path="/Infantil" element={<Infantil/>}/>
          <Route path="/Pets" element={<Pets/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;