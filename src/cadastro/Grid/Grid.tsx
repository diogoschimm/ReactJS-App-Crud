import * as React from "react"; 
import Row from "./Row";
import Pessoa from "../../model/Pessoa";

interface Props {
  dataSource: Pessoa[] 
}

class Grid extends React.Component<Props> {
  render() {
  
     const {dataSource} = this.props;

     const linhas = dataSource.map( (pessoa, index) => <Row pessoa={pessoa} key={index} /> ); 

    return (
       
        <table className="margin table">
          <thead className="thead-dark">
            <tr> 
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Idade</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
             {linhas}
          </tbody>
        </table> 
    );
  }
}

export default Grid;
