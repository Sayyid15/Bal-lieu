import {Text, View, SafeAreaView, StyleSheet, Pressable, Image, } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import {OrientationLock} from "expo-screen-orientation";
import HomeBackground from "./HomeBackground";
import Circle from "./Circle";
import Stripes from "./Stripes";
import Blocks from "./Blocks";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
const Home = () => {
    ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE = 5);
    return (
        <SafeAreaView style={styles.main}>

<HomeBackground/>
            <Circle/>

            <View style={styles.home}>
                <Stripes/>

                <View style={styles.row1}>
                    <View>
                        <Pressable style={styles.button}>
                            <FontAwesome name="play-circle" size={90}/>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={styles.button}>
                            <FontAwesome name="id-card" size={60}/>
                        </Pressable>
                    </View>
                    <Blocks/>
                </View>

                <View style={styles.row2}>
                    <View>
                        <Pressable style={styles.button}>
                            <FontAwesome name='star' size={60}/>

                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={styles.button}>
                            <FontAwesome name='trophy' size={60}/>

                        </Pressable>
                    </View>
                </View>
                <Image style={styles.image} source={require('../assets/Yoichi_Isagi_Team_Z.png')} />


            </View>



        </SafeAreaView>
    )

}
export default Home;


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: ('#2D6B51'),
        overflow: "hidden",
        display: "flex",
    },
    home: {
        flex: 1,
        backgroundColor: ('#1CEB95'),
        margin: 35,
        marginLeft: 150,
        borderRadius:5,
        shadowOpacity:2,
        top:10

    }
    ,
    button: {
        backgroundColor: ('#2D6B51'),
        padding: 2,
        width: 110,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 15

    }, row1: {

        flexDirection: "row",
        position: "absolute",
        left: 25
    }, row2: {
        flexDirection: "row",
        position: "absolute",
        top: 115,
        left: 25
    },
    image:{
        top:-5,
        left:350
    }

})