import "./Botao.css"

const Botao = (props) => {
    return(
        // Estamos obtendo os filhos do botao como propriedade, outra forma de fazer
        <button className="botao">{props.children}</button>
    );
};

export default Botao;