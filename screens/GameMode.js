import React from "react";
import Rectangle from './Rectangle'
import {StyleSheet, SafeAreaView, View, Text, Pressable} from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import {OrientationLock} from "expo-screen-orientation";


const GameMode = () => {
    ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE = 5);

    return (
        <SafeAreaView style={styles.main}>

            <Rectangle/>

            <View style={styles.row1}>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Ranked 6 vs 6 </Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Ranked 5 vs 5</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Ranked 3 vs 3</Text>
                </Pressable>

            </View>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Doelen</Text>
                </Pressable>
            </View>
            </View>

            <View style={styles.row2}>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Unranked 6 vs 6</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Unranked 5 vs 5</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Unranked 3 vs 3</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Freestyle Battle</Text>
                </Pressable>
            </View>
            </View>

            <View style={styles.row3}>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Freekick Battle</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.game}>
                    <Text style={styles.text}> Juggling Battle</Text>
                </Pressable>
            </View>
            </View>


        </SafeAreaView>
    )
}
export default GameMode;


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: ('#2D6B51'),
        overflow: "hidden",
        flexDirection: "row",

    }, text:{
        backgroundColor:('#16B874'),
        width:125,
        textAlign:"center",
        borderRadius:20
    },game: {
        backgroundColor: "white",
        padding: 2,
        width: 120,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        margin :20

    },row1:{
       marginLeft:120,
        flexDirection:"row",
        position:"absolute",
    },row2:{
        marginLeft:120,
        flexDirection:"row",
        position:"absolute",
        top:100,
    },row3:{
        flexDirection:"row",
        position:"absolute",
        top:200,
        marginLeft:280





    }
})
