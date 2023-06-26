import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Menu from "../screens/menu"
import Lobby from "../screens/lobby"
import PlayerDetails from "../screens/PlayerDetail"
// import IonIcon from "react-native-vector-icons/Ionicons";
// import {faHome} from "@fortawesome/free-solid-svg-icons";
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from "@react-navigation/native";


const Tab = createBottomTabNavigator()
const Tabs = () =>{

    return(

        <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                position: 'absolute',
                bottom:25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#2D6B51',
                borderRadius:15,
                height:50,
            },
            tabBarActiveTintColor: "#ffffff",
            tabBarInactiveTintColor: "black",



        }}>
            <Tab.Screen name="Menu" component={Menu} options={
                {
                    tabBarLabel:"",
                    tabBarIcon:({color,size}) =>
                        <Icon name="home" size={size} color={color} />
                }
            }  />

            <Tab.Screen name="Stats" component={PlayerDetails} options={
                {
                    tabBarLabel:"",
                    tabBarIcon:({color,size}) =>
                        <Icon name="barchart" size={size} color={color} />
                }
            }/>

            <Tab.Screen name="Lobby" component={Lobby} options={
                {
                    tabBarLabel:"",
                    tabBarIcon:({color,size}) =>
                        <Icon name="play" size={size} color={color} />
                }
            }  />





            <Tab.Screen name="p" component={PlayerDetails} options={
                {
                    tabBarLabel:"",
                    tabBarIcon:({color,size}) =>
                        <Icon name="check" size={size} color={color} />
                }
            }  />





        </Tab.Navigator >
            </NavigationContainer>
    )
}

export default Tabs;
