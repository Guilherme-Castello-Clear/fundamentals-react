import React from 'react';

export default function ComParametros(props){
    const status = props.nota >= 7 ? 'Aprovado(a)' : 'Retido(a)'
    var nota = Math.ceil(props.nota);
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong> 
                tem nota
                <strong> {nota} </strong>
                e foi
                <strong> {status}</strong>
            </p>

        </div>
    )
}