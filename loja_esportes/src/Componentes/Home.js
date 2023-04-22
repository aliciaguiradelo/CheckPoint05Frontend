import React,{useState} from 'react'
import videoSource from '../img/adidasBrand.mp4'
import '../css/style.css'

function Home(){
    //criando o useState (manipula o estado da variável)
    const [nome, setNome] = useState();
    const [email, setEmail] = useState ()
    const [userEmail, setUserEmail] = useState()
    const [idade, setIdade] = useState('');

    //criando uma função para enviar email
    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    //criando a função limpar campo
    function limparEmail(){
        setUserEmail('')
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (nome && email && idade) {
          alert(`Cadastro confirmado para ${nome} com email ${email} e idade ${idade} anos.`);
          setNome('');
          setEmail('');
          setIdade('');
        } else {
          alert('Por favor, preencha todos os campos.');
        }
      }

    return (
        <div className="home">
            <div class="trailer">
                <h1>Conheça-nos</h1>
                <video source={videoSource} width="600px" controls></video>
            </div>
            <div className='usingUseState'>
                <form onSubmit={handleSubmit}>
                    <label>
                    Nome:
                    <input type="text" value={nome} onChange={event => setNome(event.target.value)} />
                    </label>
                    <label>
                    Email:
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                    </label>
                    <label>
                    Idade:
                    <input type="number" value={idade} onChange={event => setIdade(event.target.value)} />
                    </label>
                    <button type="submit" onClick={enviarEmail}>ENVIAR</button><br/><br/>
                    {/*{email}*/}
                    {/*condição para verificar se o campo email está preenchido*/}
                    {userEmail &&(
                    <   div>
                            <p id="userEmail">O email do usuário é:<span> {userEmail}</span></p><br/>
                            <button onClick={limparEmail}>LIMPAR CAMPO</button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}
export default Home;