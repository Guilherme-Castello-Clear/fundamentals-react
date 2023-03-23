import React from 'react'

export default props => {
    return (
        <div>
            <div>
                <label htmlFor="stepInput">Passo: </label>
                <input type="number" id='stepInput' value={props.passo} onChange={props.setPasso}/>
            </div>
        </div>
    )
}