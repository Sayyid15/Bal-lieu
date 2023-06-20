import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Rectangle from './screens/Rectangle'
import * as ScreenOrientation from 'expo-screen-orientation';
import {OrientationLock} from "expo-screen-orientation";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/Home";
import GameMode from "./screens/GameMode";
import Leaderboard from "./screens/Leaderboard";





const Tab = createBottomTabNavigator();
const App = () => {
    ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE = 5);
    return (

        <NavigationContainer>
            <Rectangle/>
            <Tab.Navigator
                screenOptions={{headerShown:false}}
            >
                <Tab.Screen
                    name={"Home"}
                    component={Home}
                />

                <Tab.Screen
                    name="Leaderboard"
                    component={Leaderboard}
                />

               <Tab.Screen
                   name={"GameMode"}
                   component={GameMode}
               />


            </Tab.Navigator>
        </NavigationContainer>

    )

};
export default App


