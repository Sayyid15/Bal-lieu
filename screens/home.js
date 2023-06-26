import { View, SafeAreaView, StyleSheet, Pressable, Image,} from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import {OrientationLock} from "expo-screen-orientation";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Circle from "./circle";

const Home = () => {
    ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE = 5);
    return (
        <SafeAreaView style={styles.main}>

            <View style={styles.shadow}/>
            <View style={styles.shadow2}/>
            <View>
                <View style={styles.s5}/>
                <View style={styles.s6}/>
                <View style={styles.s7}/>
                <View style={styles.s8}/>
                <View style={styles.s9}/>
                <View style={styles.s10}/>
            </View>
            <Circle/>

            <View style={styles.home}>

                <View>
                    <View style={styles.s1}/>
                    <View style={styles.s2}/>
                    <View style={styles.s3}/>
                    <View style={styles.s4}/>

                </View>

                <View style={styles.row1}>
                    <View>
                        <Pressable style={styles.button}>
                            <FontAwesome name="play-circle" size={60}/>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={styles.button}>
                            <FontAwesome name="id-card" size={60}/>
                        </Pressable>
                    </View>

<View>
    <View>
        <Pressable style={styles.bl1}>
            <FontAwesome name="dollar" size={35}/>
        </Pressable>
    </View>
    <View>
        <Pressable style={styles.bl1}>
            <FontAwesome name="list" size={35}/>
        </Pressable>
    </View>
    <View>
        <Pressable style={styles.bl1}>
            <FontAwesome name="gear" size={35}/>
        </Pressable>
    </View>
</View>

                    <View style={styles.row2}>
                        <View>
                            <Pressable style={styles.button}>
                                <FontAwesome name="star" size={60}/>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable style={styles.button}>
                                <FontAwesome name="trophy" size={60}/>
                            </Pressable>
                        </View>
                    </View>

                </View>
                <Image style={styles.image} source={require('../assets/Yoichi_Isagi_Team_Z.png')}/>

            </View>

        </SafeAreaView>
    )

}
export default Home;


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: ('#2D6B51'),
    },
    home: {
        flex: 1,
        backgroundColor: ('#1CEB95'),
        margin: 35,
        marginLeft: "25%",
        borderRadius: 20,
        shadowOpacity: 2,
    }
    ,
    button: {
        backgroundColor: ('#2D6B51'),
        width: 120,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        margin: 20,
    }, row1: {
        flexDirection: "row",
        position: "absolute",
    }, row2: {
        flexDirection: "row",
        position: "absolute",
        top: "45%",
    },
    image: {
        left: "65%"
    },
    shadow: {
        backgroundColor: "#A83E2A",
        borderRadius: 20,
        width: "50%",
        height: "50%",
        left: "55%",
        top: "5%",
        position: "absolute",
        shadowOpacity: 2
    },
    shadow2: {
        backgroundColor: "#A83E2A",
        borderRadius: 20,
        width: "50%",
        height: "50%",
        left: "27%",
        top: "45%",
        position: "absolute",
        shadowOpacity: 2
    }, bl1: {
        backgroundColor: ('#1CEB95'),
        width: 70,
        height: 70,
        borderRadius: 10,
        margin: 10,
        left: -500,
        top: "20%",
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity:3
    },
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
    },

    s5: {
        backgroundColor: "#A83E2ABF",
        transform: [{rotate: '45deg'}],
        width: 2,
        top:-30,
        height: 250,
        left: 65,
        position: "absolute",
    },
    s6: {
        backgroundColor: "#A83E2ABF",
        transform: [{rotate: '45deg'}],
        width: 2,
        top:-30,
        height: 280,
        left: 5,
        position: "absolute",
    },

    s7: {
        backgroundColor: "#A83E2ABF",
        transform: [{rotate: '135deg'}],
        width: 2,
        top:5,
        height: 400,
        left: 650,
        position: "absolute",
    }
    ,

    s8: {
        backgroundColor: "#A83E2ABF",
        transform: [{rotate: '135deg'}],
        width: 2,
        top:5,
        height: 400,
        left: 600,
        position: "absolute",
    },
    s9: {
        backgroundColor: "#A83E2ABF",
        transform: [{rotate: '135deg'}],
        width: 2,
        top:200,
        height: 100,
        left: 20,
        position: "absolute",
    },
    s10: {
        backgroundColor: "#A83E2ABF",
        transform: [{rotate: '135deg'}],
        width: 2,
        top:5,
        height: 400,
        left: -75,
        position: "absolute",
    }
})