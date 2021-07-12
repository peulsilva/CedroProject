import React from 'react'
import { ScrollView, Text, View, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'


import Questions from './Questions'
import ProjectHeader from './ProjectHeader'
import ButtonForm from './Button'


const vh=Dimensions.get('window').height/100
const vw=Dimensions.get('window').width/100

export default () => {

    return (
        <>  
            <ScrollView>
                <ProjectHeader projectName="Novo Projeto" directory="pasta atual"></ProjectHeader>
                
                <KeyboardAvoidingView style={
                    { flex: 1, flexDirection: 'column',justifyContent: 'center',}}
                    behavior="padding"    keyboardVerticalOffset={0}>
                    <Questions quest="Identificação/Ficha"/>
                    <Questions quest="Tipo"/>
                    <Questions quest="Local"/>
                    <Questions quest="Endereço/Rodovia"/>
                    <Questions quest="Número/km"/>
                    <Questions quest="Sentido"/>
                    <Questions quest="Lado"/>
                    <Questions type="numeric" quest="Latitude"/>
                    <Questions type="numeric" quest="Longitude"/>
                    <Questions multi={true} quest="Descrição da edificação"/>
                    <Questions type="numeric" quest="Área da edificação (m²)"/>
                    <Questions type="numeric" quest="Área do estacionamento (m²)"/>
                    <Questions type="numeric" quest="Área de cobertura do estacionamento (m²)"/>
                    <Questions quest="Descrição do sistema elétrico"/>
                    <Questions quest="Contato"/>
                    <Questions type="phone-pad" quest="Telefone"/>
                    <Questions multi={true} quest="Obervações primárias"/>
                    <Questions multi={true} quest="Observações secundárias"/>
                </KeyboardAvoidingView>
                
                <ButtonForm title="Submit"></ButtonForm>
            </ScrollView>
        </>
    )

}

