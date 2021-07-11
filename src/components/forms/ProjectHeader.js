import React from 'react'
import {  Text, View, StyleSheet, Dimensions, Image } from 'react-native'


const vh=Dimensions.get('window').height/100
const vw=Dimensions.get('window').width/100

export default (props)=> {
    return(
        <>  
            <View style={headerStyle.ScrollView}>
                <View style={{marginBottom:'auto', marginTop:'auto'}}>
                    <Text style={headerStyle.projectName}>{props.projectName}</Text>
                    <Text style={headerStyle.directory}>{props.directory}</Text>
                </View>
                    
            </View>
        </>
    )
    
}
            


const headerStyle=StyleSheet.create({
    ScrollView:{
        backgroundColor:"#b2acfa",
        height:15*vh,
        alignItems:'center',
        marginBottom:5*vh
    },
    projectName:{
        fontSize:8*vw,
        fontWeight:'bold',
        justifyContent:'center',
        color:'white',
        
    },
    directory:{
        fontSize:5*vw,
        fontWeight:'bold',
        color:'white',
        justifyContent:'center',
        marginLeft:'auto',
        marginRight:'auto'

    }
})