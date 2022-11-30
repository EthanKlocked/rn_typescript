/**************** INIT ****************/
import AsyncStorage from '@react-native-async-storage/async-storage';

/************** FUNCTION **************/
export default async function checkFirstLaunch() {
    try {
        const isFirstLaunched = await AsyncStorage.getItem('firstLaunch'); 
        if(isFirstLaunched === null) {
            AsyncStorage.setItem('firstLaunch', 'true');
            return true; 
        }
        return false;  
    } catch (error) {
        console.log(' [chk first launch] :' + error);  
        return false;
    }
}