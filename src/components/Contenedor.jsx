import React, { Component } from "react"
import data from "./data.json"
import Opciones from "./Opciones"
import Recordatorio from "./Recordatorio";

export default class Contenedor extends Component {

    constructor() {
        super();
        this.state = {
            contador: 0,
            historial: [],
            seleccionPrevia: "",
            textoA: "Pedir ayuda a los gritos.",
            textoB: "Mirar a mi alrededor."
        }
    }

    mapearData = () => {
        return data.map(datos => datos.historia)
    };

    apretarBoton = (e) => {
        if(e.target.id === 'A'){
                if(this.state.seleccionPrevia === ""){
                    this.setState({contador: this.state.contador + 1,seleccionPrevia: "A"});
                }
                if(this.state.seleccionPrevia === "A"){
                    this.setState({contador: this.state.contador + 2})
                }
                if(this.state.seleccionPrevia === "B"){
                    this.setState({contador: this.state.contador + 1})
                }
            }

        if(e.target.id === 'B'){
                if(this.state.seleccionPrevia === ""){
                    this.setState({contador: this.state.contador + 2,seleccionPrevia: "B"});
                }
                if(this.state.seleccionPrevia === "A"){
                    this.setState({contador: this.state.contador + 3})
                }
                if(this.state.seleccionPrevia === "B"){
                    this.setState({contador: this.state.contador + 2})
                }
            }
        this.setState({textoA: data[this.state.contador].opciones.a});
        this.setState({textoB: data[this.state.contador].opciones.b});
        this.setState({historial: this.historial.push(this.state.seleccionPrevia)});
        }


    render() {
        return (
            <div className="layout">
                <h1 className="historia">
                        {data[this.state.contador].historia}
                </h1>
                <Opciones textoA = {this.state.textoA} textoB = {this.state.textoB} evento = {this.apretarBoton} />
                <Recordatorio seleccionPrevia = {this.state.seleccionPrevia} historial = {this.state.historial}/>
            </div>
        );
    }
}

//ctrl+a y alt+shift+f Formatear codigo