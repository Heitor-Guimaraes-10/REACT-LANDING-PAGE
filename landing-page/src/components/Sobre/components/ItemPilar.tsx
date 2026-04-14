interface ItemPilarProps {
  icon: string;
  titulo: string;
  descricao: string;
}

function ItemPilar({icon, titulo, descricao }: ItemPilarProps) {
  return (
    <div className="item-pilar">
      <div>
        <img src={icon} />
      </div>
      <span className="titulo-pilar">{titulo}</span>
      <p>{descricao}</p>
    </div>
  );
}

export default ItemPilar;