import * as React from 'react';
import Pessoa from '../../model/Pessoa';

interface Props {
     pessoa: Pessoa
}

function Row(props:Props){

     const { pessoa } = props;

     return (
        <tr>
          <td>{pessoa.nome}</td>
          <td>{pessoa.email}</td>
          <td>{pessoa.idade} Anos</td>
          <td style={{ width: '180px' }} >
          <button className="btn btn-primary btn-margin">[E]</button>
          <button className="btn btn-danger btn-margin">[X]</button>
          </td>
        </tr>
     );

}
export default Row;