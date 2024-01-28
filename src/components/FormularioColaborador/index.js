import CampoTexto from "../CampoTexto";
import "./FormularioColaborador.css";

const FormularioColaborador = () => {
  return (
    <section className="formularioColaborador">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
};

export default FormularioColaborador;
