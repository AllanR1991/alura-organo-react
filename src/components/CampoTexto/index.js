import "./CampoTexto.css"

const CampoTexto = (props) => {
    //React nos entrega implicitamente um parâmetro chamado props, que são as propriedades que esse componente recebeu


    //console.log(props.label);
    // Utilizando o Console.log cima, o console.log é duplicado 2x devido ao <React.StrictMode> no index.js na pasta src, pois ele renderiza 2x para validações, porem so ocorre no modo desenvolvimento.

    //const placeholderModificada = `${props.placeholder} ...`
    
    //let valor = 'Allan';

    //hook
    
    const aoDigitado = (evento) => {
        // target - evento do JS
        props.aoAlterado(evento.target.value)
    };


    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
};

export default CampoTexto