import {SafeAreaView, StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import Rectangle from "./rectangle";

const achievements = [
    {
        id: 1,
        name: 'Achievement 1',
    },
    {
        id: 2,
        name: 'Achievement 2',
    },
    {
        id: 3,
        name: 'Achievement 3',
    },
    {
        id: 4,
        name: 'Achievement 4',

    },
    {
        id: 5,
        name: 'Achievement 5',
    },
];

const oneAchievement = ({item}) => (
    <View style={styles.item}>
        <Text style={styles.name }>
            {item.name}

        </Text>
        <FontAwesome name="trophy" size={40} color={"#FFD700"} style={styles.trophyIcon}/>

    </View>
)

export default function Achievements() {
    return (
        <SafeAreaView style={styles.main}>
            <Rectangle/>
            <View style={styles.header}>
                    <Pressable >
                        <FontAwesome name="trophy" size={100} color={"#FFD700"} />
                    </Pressable>

                <Pressable >
                    <FontAwesome name="trophy" size={83} color={"#808080"} style={styles.silverTrophy}/>
                </Pressable>
                <Pressable >
                    <FontAwesome name="trophy" size={60} color={"#CD7F32"} style={styles.bronzeTrophy}/>
                </Pressable>
            </View>
            <View style={styles.table}>
                <FlatList
                    data={achievements}
                    renderItem={oneAchievement}
                    keyExtractor={achievements => achievements.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // main: {
    //     flex: 1,
    //     backgroundColor: ('#2D6B51'),
    //     overflow: "hidden",
    //     display: "flex",
    //
    // },
    main: {
        flex: 1,
        backgroundColor: ('#2D6B51'),
alignItems:"center"
    },
    header: {
        width: 500,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: -115,
    },



    table: {
        marginTop: 110,
        flex: 1,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        width: 650,
        margin: 10,
        padding: 15,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        height: 70,
        margin: 5,
        borderRadius:5,
        backgroundColor:('#16B874'),    },

    trophyIcon: {
        left :400
    },

    name: {
        fontWeight: '600',
        color: '#D9D9D9',
        fontSize: 24,
        marginLeft: 10
    }, bronzeTrophy: {
        left:40,
        top:35
    },
    silverTrophy: {
        left:20,
        top:15
    },


});