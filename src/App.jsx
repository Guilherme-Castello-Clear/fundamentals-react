import React from 'react';
import './App.css'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import RandomNum from './components/basicos/RandomNum';
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import If from './components/condicional/If'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega.jsx'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            
            <Card title='#13- Megasena' color='#000'>
                <Mega></Mega>
            </Card>

            <Card title='#12- Contador' color='#641E16'>
                <Contador initialNum={10}></Contador>
            </Card>

            <Card title='#11- Componente Controlado' color='#2980B9'>
                <Input></Input>
            </Card>

            <Card title='#10- Comunicação Indireta' color='#138D75'>
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card title='#9- Comunicação Direta' color='#1B2631'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card title='#8- Renderização Condicional' color='#D4AC0D'>
                <ParOuImpar numero={<RandomNum min={3} max={10}/>}></ParOuImpar>
                <If test={1+1 == 3}>
                    <span>Afirmativo</span>
                </If>
                <UsuarioInfo usuario={{name: 'Iago Barreto'}}></UsuarioInfo>
            </Card>

            <Card title='#7- Tabela' color='#546E7A'>
                <TabelaProdutos></TabelaProdutos>
            </Card>

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