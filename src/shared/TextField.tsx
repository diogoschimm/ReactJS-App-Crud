import * as React from "react";

interface Props{
     label: string,
     placeHolder?: string,
     number?: boolean,
     value: string,
     onChange: (v:string) => void
}

class TextField extends React.Component<Props> {

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => { 
    // Realizar o tratamento do valor antes de emitir o valor

    var valor = evt.target.value;
    if (this.props.number){
      this.handleChangeNumber(valor);
    }else{
      this.handleChangeText(valor);
    } 
  };

  handleChangeNumber(valor: string){
    const num = +valor;
    if (isNaN(num)) return;
    console.log(num);

    this.props.onChange(valor);
  }
  handleChangeText(valor: string){
    this.props.onChange(valor);
  }
  render() {
    const {label, placeHolder, value} = this.props;

    return (  
     <div className="form-group">
          <label>{label}</label>
          <input value={value} onChange={this.handleChange}  type="text" className="form-control" placeholder={placeHolder} />
     </div> 
    );
  }
}

export default TextField;
