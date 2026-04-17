interface ItemEquipeProps {
    nome: string;
    cargo: string;
    descricao: string;
    corDeFundo?: string; // Nova prop opcional para a cor do card
}

function ItemEquipe({ nome, cargo, descricao, corDeFundo }: ItemEquipeProps) {
    

    const iniciais = nome
        .trim()
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <div className="item-equipe">
            
            <div 
                className="avatar-equipe" 
                style={{ backgroundColor: corDeFundo || "#0033ffff" }}
            >
                {iniciais}
            </div>

            <div className="content-equipe">
                <span className="name-equipe">{nome}</span>
                <span className="cargo-equipe">{cargo}</span>
                <p className="description-equipe">{descricao}</p>
            </div>
        </div>
    );
}

export default ItemEquipe;