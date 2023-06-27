import React from "react";
import {Alert, Button, FlatList, Modal, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {useState} from "react";
import {SafeAreaView} from "react-navigation";
import Rectangle from "./rectangle";

export default function PlayerDetail() {
    const data = [
        {
            id: 1,
            title: 'Win',
            position: "ST",
            goals: "1",
            assists: "0",
            score: "3-2",
            color: "green"


        },
        {
            id: 2,
            title: 'Draw',
            position: "RW",
            goals: "0",
            assists: "0",
            score: "1-1",
            color: "orange"

        },
        {
            id: 3,
            title: 'Loss',
            position: "CB",
            goals: "1",
            assists: "0",
            score: "1-2",
            color: "red"
        },
        {
            id: 4,
            title: 'Draw',
            position: "ST",
            goals: "0",
            assists: "1",
            score: "2-2",
            color: "red"
        },
        {
            id: 5,
            title: 'Win',
            position: "RW",
            goals: "2",
            assists: "1",
            score: "7-1",
            color: "green"
        }
    ];
    const stats = {
        pace: 95,
        shot: 90,
        pass: 91,
        dribble: 96,
        defend: 80,
        physical: 85,

    }
    const [modalVisible, setModalVisible] = useState(false);


    const renderItem = ({item, index}) => {
        return (<SafeAreaView style={{
            backgroundColor: item.color,
            flexDirection: "row",
            width: 400,
            left: 150,
            top: 50,
            height: 32,
            borderRadius: 0,
            fontsize: "large",
            justifyContent: "space-between",
            paddingRight: 30,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,

        }}>
            <Text>
                {item.position}
            </Text>
            <Text>
                Goals:{item.goals}
            </Text>
            <Text>
                Assists:{item.assists}
            </Text>
            <Text>
                Score:{item.score}
            </Text>
            <Text>
                {item.title}
            </Text>

        </SafeAreaView>);
    };


    return (

        <SafeAreaView style={styles.main}>
            <Rectangle/>


                <Pressable
                    style={[styles.button, styles.buttonOpen, styles.left]}

                    onPress={() => setModalVisible(true)}>
                    <View>
                        <Image style={styles.image} source={require('../assets/xavi.png')}/>
                    </View>
                    <Text style={styles.textStyle}>Show Stats</Text>


                </Pressable>


            <FlatList
                data={data}
                renderItem={renderItem}
            />

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    supportedOrientations={['portrait', 'landscape']}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Text style={styles.modalText}>SHO:{stats.shot}</Text>
                            <Text style={styles.modalText}>PAC:{stats.pace}</Text>
                            <Text style={styles.modalText}>PAS:{stats.pass}</Text>
                            <Text style={styles.modalText}>DRI:{stats.dribble}</Text>
                            <Text style={styles.modalText}>DEF:{stats.defend}</Text>
                            <Text style={styles.modalText}>PHY:{stats.physical}</Text>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Stats</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: ('#2D6B51'),
        flexDirection: "row"
    },
    image: {
        width: "100%",
        height: "100%"

    },

    title: {
        justifyContent: "s",
        alignContent: "center",
        flexDirection: "column",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: "column"

    },
    button: {
        borderRadius: 20,
        padding: 30,
        elevation: 2,
justifyContent:"center",
    alignContent:"center",
        shadowOpacity:2,
        shadowColor:""
    },
    buttonOpen: {
        backgroundColor: '#1CEB95',
    },
    buttonClose: {
        backgroundColor: '#1CEB95',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    left: {

        left: 50,
        width: 200,
        top: 50,
        height: 250
    }
})