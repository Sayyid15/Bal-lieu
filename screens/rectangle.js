import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

const Rectangle = () => {

    return (
        <View>
        <View style={styles.r1}/>
           <View style={styles.r2}/>
            <View style={styles.r3}/>



        </View>
    )
};

export default Rectangle;

const styles = StyleSheet.create({


    r1:{
        backgroundColor:"#A83E2ABF",
        transform: [{ rotate: '135deg' }],
        width:1200,
        height:80,
        left :200,
        position: "absolute",
        shadowOpacity:2

    },r2:{
        backgroundColor:"#A83E2ABF",
        transform: [{ rotate: '135deg' }],
        width:1200,
        height:80,
        left:-125,
        position: "absolute",
        shadowOpacity:2


    },r3:{
        backgroundColor:"#A83E2ABF",
        transform: [{ rotate: '135deg' }],
        width:1800,
        height:80,
        left:-700,
        position: "absolute",
        zIndex:1,
        shadowOpacity:2

    }
});

