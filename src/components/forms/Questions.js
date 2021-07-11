import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, StyleSheet, Dimensions } from 'react-native'

export default  props => {

    const [anwser, setAnwser] = useState('')
    const type = props.type || "default"
    const styleText = [styles.Text]
    const styleInput = [styles.Input]

    // Colored = () => {
    //     styleText.push(styles.onPressText)
    //     styleInput.push(styles.OnPressInput)
    // }

    // Uncolored = () => {
    //     styleText.pop()
    //     styleInput.pop()
    // }

    return (
        <SafeAreaView>
                <Text style={styleText} >{props.quest}</Text>
                <TextInput
                    style={styleInput}
                    keyboardType={type}
                    multiline={props.multi}
                    value={anwser}
                    onChangeText={anwser => setAnwser(anwser)}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 16,
        justifyContent: "center",
        fontWeight:'bold',
        marginLeft: Dimensions.get('window').width / 20,
        color: "#6d6875"
        
    },
    Input: {
        fontSize: 16,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#6d6875",
        width: "90%",
        marginBottom: Dimensions.get('window').height / 50,
        marginLeft: Dimensions.get('window').width / 20,
    },
    // OnPressText: {
    //     color: "#023e8a"
    // }, 
    // OnPressInput: {
    //     borderColor: "#023e8a",
    // }
})