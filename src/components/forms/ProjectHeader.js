import React from 'react'
import {  Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const vh=Dimensions.get('window').height/100
const vw=Dimensions.get('window').width/100

export default (props)=> {
    function returnPage(){
        alert('Você voltou')
    }
    return(
        <>  
            <View style={headerStyle.ScrollView}>
                <View style={{ flex:1, flexDirection:"row", justifyContent:'center'}}>
                    <Icon onPress={returnPage} style={headerStyle.Icon} name='chevron-left'  size={30}  color="white"/>
                    <Text style={headerStyle.projectName}>{props.projectName}</Text>
                    
                    
                </View>
                
                    
            </View>
            <View style={headerStyle.directoryView}>
                    <Text style={headerStyle.directory}>{props.directory}</Text>
            </View>
        </>
    )
    
}
            


const headerStyle=StyleSheet.create({
    Icon:{
        marginTop:5*vh,
        marginLeft: 2*vw,
        marginBottom:'auto',
        justifyContent:'center',
        alignSelf:'flex-start'
    },
    ScrollView:{
        flexDirection:'row',
        flex:0,
        flexWrap: "wrap",
        backgroundColor:"#b2acfa",
        height:10*vh,
        alignItems:'center',
        
        
    },
    projectName:{

        fontSize:32,
        fontWeight:'bold',
        justifyContent:'center',
        color:'white',
        alignSelf:'flex-start',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:4*vh
        
    },
    directory:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        justifyContent:'center',
        marginLeft:'auto',
        marginRight:'auto'

    },
    directoryView:{
        height:5*vh,
        backgroundColor:"#b2acfa",
        marginBottom:5*vh
    }
})