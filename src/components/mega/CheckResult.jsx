import React from 'react'

export default props => {
    let totalHits = 0;
    
    function count(){
        props.megaResult.map((numResult) => {
            if(props.megaLuck.indexOf(numResult) != -1){
                totalHits++;
            }
        })
    }

    function run(){
        count()
        props.check(totalHits)
    }
    return(
        <div>
            <button onClick={run}>Checar</button>
        </div>
    )
}