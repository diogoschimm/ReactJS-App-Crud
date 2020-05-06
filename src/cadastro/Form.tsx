import * as React from "react";
import TextField from "../shared/TextField";
import Pessoa from "../model/Pessoa";

interface Props{
  onAddPessoa: (pessoa: Pessoa) => void
}

interface State{
  nome: string,
  email: string,
  idade: string
}

class Form extends React.Component<Props, State> {

  state = {
    nome: "",
    email: "",
    idade: ""
  };

  handleSaveClick = () => {
    this.props.onAddPessoa({
      nome: this.state.nome,
      email: this.state.email,
      idade: this.state.idade
    });
    this.setState({ nome: "", email: "", idade: "" });
  }

  render() {
    return ( 
     <div className="card">
          <form>
            <TextField label="Nome" value={this.state.nome} onChange={(value) => this.setState({nome:value})} />
            <TextField label="E-mail" value={this.state.email} onChange={(value) => this.setState({email:value})} />
            <TextField number label="Idade" value={this.state.idade} onChange={(value) => this.setState({idade:value})} /> 
            <div style={{ textAlign: "right" }}>
              <button onClick={this.handleSaveClick} type="button" className="btn btn-primary">
                Salvar
              </button>
            </div>
          </form>  
        </div>
    );
  }
}

export default Form;
