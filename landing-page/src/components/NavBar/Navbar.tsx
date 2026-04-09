//Barra de navagação fixa no topo da página
import './style.css';
import Button from '../Button/Button';

function showMessage() {
    alert('Realizar Login');
}

function Navbar(){
    return(
        <nav className="navbar">

            <div className="container">
                <a href="#" className="logo">GuimaTech</a>

                <ul className="list-menu">
                    <li><a className="link" href="#sobre">Sobre</a></li>
                    <li><a className="link" href="#funcionalidades">Funcionalidades</a></li>
                    <li><a className="link" href="#equipe">Equipe</a></li>
                    <li><a className="link" href="#contato">Contato</a></li>
                </ul>

                <div>
                 <Button border={false}label="Login" onClick={showMessage} filled={false} />
                 <Button border={true}label="Começar agora" onClick={() => {}} filled={true} />
                </div>
            </div>

        </nav>
    );
}

export default Navbar;