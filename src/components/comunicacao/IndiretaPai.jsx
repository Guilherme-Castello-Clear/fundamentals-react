import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'


export default props => {
    const [a, b] = [1, 2]
    const [name, setName] = useState('?')
    const [idd, setIdd] = useState(0)
    const [nerd, setNerd] = useState(false)


    function fornecerInfo(nameParam, iddParam, nerdParam){
        setName(nameParam)
        setIdd(iddParam)
        setNerd(nerdParam)
    }
    return (
        <div>
            <span>{name}</span>
            <span> {idd} </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>

            <IndiretaFilho clicked={fornecerInfo}></IndiretaFilho>
        </div>
    )
}