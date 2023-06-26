import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Menu({navigation}){
    return(
        <View style={styles.container}>
            <Text>Hey</Text>
            <Button title="Check your Stats!"
                    onPress={()=>alert('poopoo')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})