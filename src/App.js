import { useState } from "react";
import Banner from "./components/Banner";
/**
 * Para evitar como foi feito no import do banner e chamar 2x o nome banner, precisamos mudar o nome do arquivo JS do componente para index ai so precisamos passar o caminho da pasta que o JS faz o resto para nós.
 */

import FormularioColaborador from "./components/Formulario";

function App() {

  const[colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    //Pega os colaboradores que ja tinha e e adiciona mais um.
    setColaboradores([...colaboradores, colaborador])
  } 

  return (
    <div className="App">
      <Banner/>
      <FormularioColaborador aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
