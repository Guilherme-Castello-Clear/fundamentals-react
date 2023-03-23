import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho name='Junior' idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho name='Gabriel' idade={17} nerd={false}></DiretaFilho>

        </div>
    )
}