interface ItemFuncaoProps {
    icon: string;
    title: string;
    description: string;
}

function ItemFuncao({icon, title, description}: ItemFuncaoProps) {
    return (
        <div className="item-funcao">
            <div className="icon-funcao">{icon}</div>
            <div className="content-funcao">
                <span className="title-funcao">{title}</span>
                <p className="description-funcao">{description}</p>
            </div>
        </div>
    );
}

export default ItemFuncao;