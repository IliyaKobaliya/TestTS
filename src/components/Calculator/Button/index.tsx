import React from 'react'

interface IButtonProps {
    item:string | number | undefined 
}

export const Button:React.FC<IButtonProps> = ({item}) =>{
    return(
        <div>{item}</div>
    )
}
