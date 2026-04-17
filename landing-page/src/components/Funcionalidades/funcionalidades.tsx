import { funcoes } from "../../Data/funcoes";
import ItemFuncao from "./components/ItemFuncoes";
import "./Funcionalidades.css";

function Funcionalidades() {
  return (
    <section className="funcionalidades">
      <div className="titulos">
        <h2>Por que escolher a GuimaTech?</h2>
        <p>
          Soluções completas desenhadas para o ecossistema de educação técnica
          profissionalizante.
        </p>
      </div>
      
      <div className="grid-Funcionalidades">
        {funcoes.map((funcoes) => (
          <ItemFuncao
            key={funcoes.id}
            icon={funcoes.icon}
            title={funcoes.title}
            description={funcoes.description}
            
          />
        ))}
      </div>
    </section>
  );
}

export default Funcionalidades;
