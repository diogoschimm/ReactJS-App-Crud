import * as React from "react";
import "./App.css";

import Form from "./cadastro/Form";
import Grid from "./cadastro/Grid";
import Pessoa from "./model/Pessoa";

interface State {
  pessoas: Pessoa[]
}

class App extends React.Component<{}, State> {

  state = {
    pessoas: JSON.parse(localStorage.getItem('lista') || "[]") || [] 
  };  
  
  // [
    //   { nome: "Luan", email: 'luan.castro@nuvem.net', idade: "19" }
      // { nome: "Gui", email: 'gui@senai.com', idade: 29 },
      // { nome: "Xandy", email: 'xandeco@btor.net', idade: 35 },
      // { nome: "Diogo", email: 'Diogo@btor.net', idade: 15 },
      // { nome: "Diego", email: 'Diego@btor.net', idade: 34 },
      // { nome: "Pedro", email: 'Pedro@btor.net', idade: 27 },
      // { nome: "Rodrigo", email: 'rodrigo@urso-pelado.net', idade: 18 }
    //]

  addPessoa(p: Pessoa){
    let valores = this.state.pessoas.concat(p);
    this.setState({pessoas : valores }) 
    localStorage.setItem("lista", JSON.stringify(valores));
  }

  render() {

    // let items = localStorage.getItem("lista") || "{}";
    // const lista = JSON.parse(items);

    // if (lista.length){
    //   //this.setState({pessoas: lista});
    // }

    // console.log(lista)


    const {pessoas} = this.state; 

    return (
      <div className="container">
         <Form onAddPessoa={(pessoa) => this.addPessoa(pessoa) }  />
         <Grid dataSource={pessoas} />
      </div>
    );
  }
}

export default App;
