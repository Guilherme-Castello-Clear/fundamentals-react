import React, {Component} from 'react'
import './Contador.css'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

export default class Contador extends Component{

    

    state = {
        numero: this.props.initialNum || 0,
        passo: this.props.initialStep || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    setPasso = (e) => {
        this.setState({
            passo: parseInt(e.target.value)
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    render(){
        return(
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes increment={this.inc} decrement={this.dec}></Botoes>

            </div>
        )
    }
}