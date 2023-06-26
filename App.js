import * as ScreenOrientation from 'expo-screen-orientation';
import {OrientationLock} from "expo-screen-orientation";
import Draw from "./navigation/tabs"





const App = () => {
    ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE = 5);


    return (

       <Draw/>

    )

};
export default App

