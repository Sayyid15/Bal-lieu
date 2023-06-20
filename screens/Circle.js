import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

const Circle = () => {

    return (
        <View>
            <View style={styles.c1}/>
            <View style={styles.c2}/>
            <View style={styles.c3}/>
            <View style={styles.c4}/>
            <View style={styles.c5}/>
            <View style={styles.c6}/>
            <View style={styles.c7}/>
        </View>
    )
};

export default Circle;

const styles = StyleSheet.create({


    c1: {
        backgroundColor: "#A83E2A",
        width: 50,
        height: 50,
        margin: 5,
        top: 300,
        left: 735,
        position: "absolute",
        borderRadius: 50
    },
    c2: {
        backgroundColor: "#16B874",
        width: 50,
        height: 50,
        margin: 5,
        top: 285,
        left: 760,
        position: "absolute",
        borderRadius: 50
    },
    c3: {
        backgroundColor: "#16B874",
        width: 50,
        height: 50,
        margin: 5,
        top: 315,
        left: -35,
        position: "absolute",
        borderRadius: 50
    },
    c4: {
        backgroundColor: "#A83E2A",
        width: 50,
        height: 50,
        margin: 5,
        top: 300,
        left: -65,
        position: "absolute",
        borderRadius: 50,

    }, c5: {
        backgroundColor: "#A83E2A",
        width: 50,
        height: 50,
        margin: 5,
        top: 15,
        left: -75,
        position: "absolute",
        borderRadius: 50,


    }, c7: {
        backgroundColor: "#16B874",
        width: 50,
        height: 50,
        margin: 5,
        top: -15,
        left: -60,
        position: "absolute",
        borderRadius: 50,

    }, c6: {
        backgroundColor: "#A83E2A",
        width: 50,
        height: 50,
        margin: 5,
        top: -15,
        left: -30,
        position: "absolute",
        borderRadius: 50,

    },
});