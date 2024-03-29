import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  
  const [nome,setNome] = useState('');
  const [cargo,setCargo] = useState('');
  const [imagem,setImagem] = useState('');
  const [time,setTime] = useState('');
  
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão'
  ]
  
  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }
  

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor=>setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor=>setCargo(valor)} 
        />
        <CampoTexto 
          obrigatorio={true}
          label="Imagem" 
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor=>setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={times}
          valor={time}
          aoAlterado={valor=>setTime(valor)}
        />
        {/* <Botao texto="Criar card"/> Forma comum de se fazer */}
        {/* Porem podemos usar esse outro metodo para que possamos passar alem do texto alguma imagem para o botao */}
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
