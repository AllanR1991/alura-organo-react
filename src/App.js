import Banner from "./components/Banner";
/**
 * Para evitar como foi feito no import do banner e chamar 2x o nome banner, precisamos mudar o nome do arquivo JS do componente para index ai so precisamos passar o caminho da pasta que o JS faz o resto para nós.
 */
import CampoTexto from "./components/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
    </div>
  );
}

export default App;
