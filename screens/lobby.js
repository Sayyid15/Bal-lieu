import React from "react";
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Lobby(){
    return(
        <View style={styles.container}>
            <Text>START GAME</Text>
            <Button title="Go to menu"
                    onPress={()=>alert("kaka")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})