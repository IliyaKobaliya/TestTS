import React from 'react'
import {Button} from './Button'
import {List} from '../List'


interface ICalcProps {
    result: number
}

export const Calculator: React.FC<ICalcProps> = ({ result }) => {
    return (
        <>
        <List items={[1,2,3,4,5]} renderItem={Button}/>
        <div>{result}</div>
        </>
    )
}