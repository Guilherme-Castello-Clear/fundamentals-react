import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import RandomNum from './components/basicos/RandomNum';
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos'


import './App.css'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            
            <Card title='#6- Repetição' color='#DD2C00'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card title='#5- Fragmento' color='#F9A825'>
                <Familia sobrenome='Silva'>
                    <FamiliaMembro nome='Pedro'/>
                    <FamiliaMembro nome='Ana'/>
                    <FamiliaMembro nome='Gustavo'/>
                </Familia>
            </Card>

            <Card title='#4- Desafio Aleatório' color='#6200EA'>
                <RandomNum min={3} max={10}/>
            </Card>

            <Card title='#3- Fragmento' color='#5E35B1'>
                <Fragmento />
            </Card>

            <Card title='#2- Com Parametros' color='#00BFA5'>
                <ComParametro titulo='Situação do Aluno' aluno='Pedro' nota={9.3} />
            </Card>

            <Card title='#1- Primeiro' color='#2E7D32'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>