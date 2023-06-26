import * as ScreenOrientation from 'expo-screen-orientation';
import {OrientationLock} from "expo-screen-orientation";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/home";
import gameModes from "../screens/gamemodes";
import Leaderboard from "../screens/leaderboard";
import Achievements from "../screens/achievements";
import Rectangle from '../screens/rectangle'
import FontAwesome from "react-native-vector-icons/FontAwesome";





const Tab = createBottomTabNavigator();
const Tabs = () => {
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
                            <FontAwesome name="bars" size={size} color={color} />
                    }}
                />

                <Tab.Screen
                    name={"GameMode"}
                    component={gameModes}
                    options={{
                    headerShown: 'GameMode',
                        headerStyle :{
                        borderRadius:4
                        }
                        ,
                        tabBarLabel:"",
                        tabBarIcon:({color,size}) =>
                            <FontAwesome name="play" size={size} color={color} />
                    }}
                />

                <Tab.Screen
                    name={"Achievements"}
                    component={Achievements}
                    options={{


                        tabBarLabel:"",
                        tabBarIcon:({color,size}) =>
                            <FontAwesome name="play" size={size} color={color} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    )

};
export default Tabs
