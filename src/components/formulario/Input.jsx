import React, {useState} from 'react'
import './input.css'

export default props => {

    const [valor, setValor] = useState('inicial')
    function change(e){
        console.log(e.target.value)
        setValor(e.target.value)
    }


    return(
        <div className='input'>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input type="text" value={valor} onChange={change}/>
                <input type="text" value={valor} readOnly/>
                <input type="text" value={undefined}/>
            </div>
        </div>
    )
}