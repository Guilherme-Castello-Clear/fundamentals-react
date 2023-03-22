import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import RandomNum from './components/basicos/RandomNum';
import Card from './components/layout/Card'

import './App.css'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card title='#4- Desafio Aleatório'>
                <RandomNum min={3} max={10}/>
            </Card>

            <Card title='#3- Fragmento'>
                <Fragmento />
            </Card>

            <Card title='#2- Com Parametros'>
                <ComParametro titulo='Situação do Aluno' aluno='Pedro' nota={9.3} />
            </Card>

            <Card title='#1- Primeiro'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>