import React, { useState } from 'react'
import GenLuckNum from './GenLuckNum'
import GenResultNum from './GenResultNum'
import CheckResult from './CheckResult'
import Display from '../contador/Display'



export default props => {

    var [megaGenResult = [], setResult] = useState([]);
    var [megaGenLuck = [], setLuck] = useState([]);
    var [checkResult, setCheck] = useState(0);


    const showLuckNum = megaGenLuck.map(num => {
        return <span key={num}>{num}, </span>
    })

    const showResultNum = megaGenResult.map(num => {
        return <span key={num}>{num}, </span>
        
    })

    function getResult(num){

        for(let i = 0; i < 7; i++){
            if(num[i] < num[i + 1]){
                let aux = num[i]
                num[i] = num[i+1]
                num[i+1] = aux
            }
        }

        setResult(num);
    }

    function getLuck(num){
        setLuck(num);
    }

    function getCheck(total){
        setCheck(total);
    }

    
    const genTable = megaGenLuck.map((m, i) => {
            return <tr key={i}><td>{megaGenResult[i]}</td><td>{megaGenLuck[i]}</td></tr>
    })
    

    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <table>
                    <thead>
                        <tr><th>Result</th><th>Luck</th></tr>
                    </thead>
                    <tbody>
                        {genTable}
                    </tbody>
                </table>
            </div>
            <div>Você acertou: {checkResult} </div>
            <GenResultNum resultNum={getResult}></GenResultNum>
            <GenLuckNum luckNum={getLuck}/>
            <CheckResult check={getCheck} megaResult={megaGenResult} megaLuck={megaGenLuck}></CheckResult>



        </>
    )    
}