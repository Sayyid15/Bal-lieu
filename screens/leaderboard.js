import React from "react";
import {StyleSheet, SafeAreaView, View, ScrollView} from "react-native";
import {Table, Row, TableWrapper, Rows} from "react-native-table-component";
import * as ScreenOrientation from 'expo-screen-orientation';
import {OrientationLock} from "expo-screen-orientation";
import Rectangle from "./rectangle";

const header = [
    'Rank', 'Rating', 'Position', 'Record'
]
const row = [
    ['1', '98', 'LW', '45-7'],
    ['2', '93', 'ST', '20-9'],
    ['3', '91', 'CAM', '32-11'],
    ['4', '90', 'CB', '43-20'],
    ['5', '89', 'LB', '50-10'],
    ['6', '87', 'RB', '47-12'],
    ['7', '87', 'RB', '47-12'],
    ['8', '87', 'RB', '47-12'],
    ['9', '87', 'RB', '47-12'],
    ['10', '87', 'RB', '47-12'],
    ['11', '87', 'RB', '47-12'],
    ['12', '87', 'RB', '47-12'],
    ['13', '87', 'RB', '47-12'],
    ['14', '87', 'RB', '47-12'],
    ['15', '87', 'RB', '47-12'],
    ['16', '87', 'RB', '47-12'],
    ['17', '87', 'RB', '47-12'],
    ['18', '87', 'RB', '47-12'],
    ['19', '87', 'RB', '47-12'],
    ['20', '87', 'RB', '47-12'],

]


const Leaderboard = () => {
    ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE = 5);
    return (

        <SafeAreaView style={styles.main}>
            <View style={{flex: 1, padding: 10}}>
                <Rectangle/>
                <Table style={styles.table}>

                    <Row data={header} style={styles.headers}/>
                    <ScrollView>
                        <TableWrapper >
                            <Rows data={row} style={styles.rows}
                            />
                        </TableWrapper>
                    </ScrollView>
                </Table>
            </View>
        </SafeAreaView>

    )

};
export default Leaderboard;


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: ('#2D6B51'),
        overflow: "hidden",
        display: "flex",
    },
    table: {
        position: "fixed",
        padding: 30,
        textAlign: "center",
        flexWrap: "wrap",
        overflow:"auto",
        shadowOpacity:5,
        border:1 ,
        gap:5
    },
    headers: {
        backgroundColor: ('#D9D9D9'),
        paddingVertical: 10,
        flexArr: [1, 3, 3, 3],
        margin: 1,
        borderRadius:5,
    },
    rows: {
        backgroundColor: ('#53B88D'),
        heightArr: [28, 28, 28, 28],
        flexArr: [1, 2, 2, 2],
        flexDirection: "row",
        margin: 1,
        padding: 10,
        borderRadius:5,

    }
})