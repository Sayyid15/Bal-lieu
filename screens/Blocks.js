import React from "react";
import {Pressable, StyleSheet, View,} from "react-native";
import HomeBackground from "./HomeBackground";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Blocks=()=>{
    return(
        <View>
            <View>
                <Pressable style={styles.bl1}>
                    <FontAwesome name='dollar' size={30} />

                </Pressable>
            </View>
            <View>
                <Pressable style={styles.bl2}>
                    <FontAwesome name='list' size={35} />
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.bl3}>
                    <FontAwesome name='gear' size={35} />
                </Pressable>
            </View>

        </View>
    )
}
export default Blocks;

const styles = StyleSheet.create({


    bl1:{
        backgroundColor: ('#1CEB95'),
        padding: 2,
        width: 70,
        height: 70,
        borderRadius: 10,
        margin: 10,
        left:-425,
        top:15,
        justifyContent:"center",
        alignItems:"center"


    },
    bl2:{
        backgroundColor: ('#1CEB95'),
        padding: 2,
        width: 70,
        height: 70,
        borderRadius: 10,
        margin: 10,
        left:-425,
        top:15,
        justifyContent:"center",
        alignItems:"center"

    },
    bl3:{
        backgroundColor: ('#1CEB95'),
        padding: 2,
        width: 70,
        height: 70,
        borderRadius: 10,
        margin: 10,
        left:-425,
        top:15,
        justifyContent:"center",
        alignItems:"center"

    },




    })