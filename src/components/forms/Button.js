import React from 'react'
import { Button } from 'react-native'

export default (props)=>{
    function submit(){
        alert("você apertou o botão")
    }
    return(
        <>
            <Button title={props.title} onPress={submit}></Button>
        </>
    )
    
}