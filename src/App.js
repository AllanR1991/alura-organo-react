import Banner from "./components/Banner";
/**
 * Para evitar como foi feito no import do banner e chamar 2x o nome banner, precisamos mudar o nome do arquivo JS do componente para index ai so precisamos passar o caminho da pasta que o JS faz o resto para nós.
 */
import CampoTexto from "./components/CampoTexto";
import FormularioColaborador from "./components/FormularioColaborador";

function App() {
  return (
    <div className="App">
      <Banner/>
      <FormularioColaborador/>
    </div>
  );
}

export default App;
