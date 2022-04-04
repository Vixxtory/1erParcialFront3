import React, {Component} from "react"

export default class Opciones extends Component {

    render(){
        return(
        <>
            <div className="opciones"> 
                <div className="opcion">
                    <button id="A" className="botones" onClick={this.props.evento}>A</button>
                    <h2> {this.props.textoA} </h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={this.props.evento}>B</button>
                    <h2> {this.props.textoB} </h2>
                </div>
            </div>
        </>
        )};
}
    
