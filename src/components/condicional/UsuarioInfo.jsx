import React from 'react'
import If, {Else} from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.name}>
                Seja bem vindo <strong>{usuario.name}</strong>!
                <Else>
                    Seja bem vindo <strong>Amigão</strong>!
                </Else>
            </If>

        </div>
    )
}