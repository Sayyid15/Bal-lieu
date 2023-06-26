import React from "react";
import {Alert, Button, FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {SafeAreaView} from "react-navigation";
import {ScrollView} from "react-native-gesture-handler";

export default function PlayerDetail(){
    const data = [
        {
            id: 1,
            title: 'Win',
            position: "ST",
            goals:"1",
            assists: "0",
            score: "3-2",
            color:"green"


        },
        {
            id: 2,
            title: 'Draw',
            position: "RW",
            goals:"0",
            assists: "0",
            score: "1-1",
            color:"orange"

        },
        {
            id: 3,
            title: 'Loss',
            position: "CB",
            goals:"1",
            assists: "0",
            score: "1-2",
            color:"red"
        },
        {
            id: 4,
            title: 'Draw',
            position: "ST",
            goals:"0",
            assists: "1",
            score: "2-2",
            color:"red"
        },
        {
            id: 5,
            title: 'Win',
            position: "RW",
            goals:"2",
            assists: "1",
            score: "7-1",
            color:"green"
        }
    ];
    const stats = {
        pace:85,
        shot:92,
        pass:91,
        dribble:95,
        defend:38,
        physical:65,

    }
    const [modalVisible, setModalVisible] = useState(false);


    const renderItem = ({item, index}) => {
        return (<SafeAreaView style={{backgroundColor: item.color,
            flexDirection: "row",
            width:400,
            left:100,
            top: 50,
            height:32,
            borderRadius:0,
            fontsize:"large",
            justifyContent: "space-between",
            paddingRight:50,
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



    return(

        <SafeAreaView style={styles.container}>
            <Pressable
                style={[styles.button, styles.buttonOpen, styles.left]}
                onPress={() => setModalVisible(true)}>
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

const styles =  StyleSheet.create({
    container:{
       flex: 1,
       flexDirection:"row"
    },

    title:{
        justifyContent: "s",
        alignContent: "center",
        flexDirection:"column",
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
        flexDirection:"column"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#2D6B51',
    },
    buttonClose: {
        backgroundColor: '#2D6B51',
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
    left:{

       left: 10,
       width: 200,
       top: 80,
       height: 50
    }
})