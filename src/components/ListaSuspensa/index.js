import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    
    console.log(props.itens.map(item =><option key={item}>{item}</option>))
    console.log(props.itens)
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select id="select-lista">
                {/*
                    Estamos pegando cada item e adicionando a tag option e a propriedade key a cada um deles.
                */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
                {/* 
                    Cuidado ao passar o index do array para propriedade Key, pois ela pode dar problema caso haja exclusao de um item, pode ser que o react nao atualize. 
                */}
            </select>
        </div>

        
    );
};

export default ListaSuspensa;