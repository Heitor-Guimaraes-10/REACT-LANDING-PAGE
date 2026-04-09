
import Button from '../Button/Button';
import './Hero.css';
import Statistics from './components/Statistics';

function Hero(){

return(
    <section className="hero">
        <div className="container">
        <span className="tagHero">Plataforma de Aprendizado do futuro</span>
        <h1 className="titleHero">Gestão de aprendizado inteligente para <span>escolas técnicas</span></h1>
        <p className="descriptionHero">Centralize avaliações, presença e progresso dos alunos em uma interface intuitiva e potente. Desenvolvido para instituições que buscam excelência acadêmica.</p>
        

        <div className='buttonsHero'>
            <Button border={true}label="Explorar funcionalidades" onClick={() => {}} filled={true} />
            <Button border={true}label="Saiba mais" onClick={() => {}} filled={false} />
        </div>

        <div className="statsHero">
            <Statistics data="120+" description="escolas técnicas" />
            <Statistics data="+48 mil" description="Satisfação do usuário" />
            <Statistics data="4.9⭐" description="avaliação média" />
        </div>
        </div>
    </section>
)}
export default Hero;