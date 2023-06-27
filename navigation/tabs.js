import * as ScreenOrientation from 'expo-screen-orientation';
import {OrientationLock} from "expo-screen-orientation";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/home";
import gameModes from "../screens/gameModes";
import Leaderboard from "../screens/leaderboard";
import Achievements from "../screens/achievements";
import PlayerDetail from "../screens/playerDetails.js"
import Rectangle from '../screens/rectangle'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'






const Tab = createBottomTabNavigator();
const Tabs = () => {
    ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE = 5);


    return (

        <NavigationContainer>
            <Rectangle/>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        position: 'absolute',
                        bottom:25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#16B874',
                        borderRadius:15,
                        height:50,
                    },
                    tabBarActiveTintColor: "#ffffff",
                    tabBarInactiveTintColor: "black",
                    headerShown:false



                }}
            >
                <Tab.Screen
                    name={"Home"}
                    component={Home}
                    options={{
                        tabBarLabel:"",
                        tabBarIcon:({color,size}) =>
                            <FontAwesome name="home" size={size} color={color} />
                    }}
                />

                <Tab.Screen
                    name="Leaderboard"
                    component={Leaderboard}
                    options={{
                        tabBarLabel:"",
                        tabBarIcon:({color,size}) =>
                            <MaterialCommunityIcons name="podium" size={size} color={color} />
                    }}
                />

                <Tab.Screen
                    name={"GameMode"}
                    component={gameModes}
                    options={{
                        tabBarLabel:"",
                        tabBarIcon:({color,size}) =>
                            <MaterialCommunityIcons name="soccer-field" size={size} color={color} />
                    }}
                />

                <Tab.Screen
                    name={"Achievements"}
                    component={Achievements}
                    options={{
                        tabBarLabel:"",
                        tabBarIcon:({color,size}) =>
                            <FontAwesome name="trophy" size={size} color={color} />
                    }}
                />
                <Tab.Screen name="Stats" component={PlayerDetail} options={
                    {
                        tabBarLabel:"",
                        tabBarIcon:({color,size}) =>
                            <Icon name="barschart" size={size} color={color} />
                    }
                }/>

            </Tab.Navigator>
        </NavigationContainer>

    )

};
export default Tabs
