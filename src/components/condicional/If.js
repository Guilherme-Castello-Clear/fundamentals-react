import React from 'react'

export default props => {
    const c = React.Children.toArray(props.children);

    const elseChild = c.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = c.filter(child => {
        return child !== elseChild
    })

    if(props.test){
        return ifChildren
    }
    else if(elseChild){
        return elseChild;
    }
    else{
        return false
    }
}

export const Else = props => props.children