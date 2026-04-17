import { equipe } from "../../Data/equipe";
import ItemEquipe from "./components/ItemEquipes";
import "./Equipe.css";

function Equipe() {
    return (
        <section className="equipe">
            <div className="titulos">
                <h2>Quem esta por tras da GuimaTech</h2>
                </div>
                <div className="grid-equipe">
                {equipe.map((membro) => (
                    <ItemEquipe
                        key={membro.id}
                        nome={membro.nome}
                        cargo={membro.cargo}
                        descricao={membro.descricao}
                        corDeFundo={membro.cor}
                    />
                    ))}
                </div>
            </section>
        );
    }

    export default Equipe;