import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";
const HomeBackground = () => {

    return (
        <View>
            <View style={styles.b1}/>
            <View style={styles.b2}/>
        </View>
    )
};

export default HomeBackground;

const styles = StyleSheet.create({


    b1:{
        backgroundColor:"#A83E2A",
borderRadius:5,
        width:350,
        height:200,
        left :300,
        top:30,
        position: "absolute",
        shadowOpacity:2


    },b2:{
        backgroundColor:"#A83E2A",
        borderRadius:5,
        width:350,
        height:200,
        left:130,
        position: "absolute",
        top:135,
        shadowOpacity:2



    }
});