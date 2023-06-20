import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

const Stripes = () => {

    return (
        <View>
            <View style={styles.s1}/>
            <View style={styles.s2}/>
            <View style={styles.s3}/>
            <View style={styles.s4}/>

        </View>
    )
};

export default Stripes;

const styles = StyleSheet.create({


    s1:{
        backgroundColor:"#A83E2ABF",
        transform: [{ rotate: '135deg' }],
        width:2,
        height:250,
        left :75,
        top:100,
        position: "absolute",
    }, s2:{
        backgroundColor:"#A83E2ABF",
        transform: [{ rotate: '135deg' }],
        width:2,
        height:250,
        top:10,
        left :50,
        position: "absolute",
    }, s3:{
        backgroundColor:"#A83E2ABF",
        transform: [{ rotate: '45deg' }],
        width:2,
        height:250,
        top:-95,
        left :250,
        position: "absolute",
    }, s4: {
        backgroundColor: "#A83E2ABF",
        transform: [{rotate: '45deg'}],
        width: 2,
        top:5,
        height: 250,
        left: 215,
        position: "absolute",
    }
});