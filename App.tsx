/**************** INIT ****************/
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { checkFirstLaunch } from 'lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TotalNavigation } from 'components';

/************** COMPONENT *************/
export default function App() {
    //function
    const initExec = async() : Promise<void> => {
        const firstLaunchResult = await checkFirstLaunch();
        console.log(firstLaunchResult);
    }

    const refreshAsyncStorage = async() : Promise<void> => {
        const clearResult = await AsyncStorage.clear();
        console.log(clearResult);
    }

    const showFirstLaunch = async() : Promise<void> => {
        const FirstLaunched = await AsyncStorage.getItem('firstLaunch'); 
        console.log(FirstLaunched);
    }    

    const setFirstLaunch = async(val : string) : Promise<void> => {
        const FirstLaunched = await AsyncStorage.setItem('firstLaunch', val);
        console.log(FirstLaunched);
    }        

    //effect
    useEffect(() => {
        initExec();
    },[]);

    //render
    return (
        <TotalNavigation />
        /*
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: 'Home' }} // 각 화면 타이틀(헤더에 렌더링됨)
                    />
                    <Stack.Screen
                        name="Todo"
                        component={Todo}
                        options={{ title: 'Todo' }}
                    />
                    <Stack.Screen
                        name="TestPage"
                        component={TestPage}
                        options={{ title: 'TestPage' }}
                    />                    
                </Stack.Navigator>
            </NavigationContainer>
            <Button
                title="set true to first"
                onPress={() => setFirstLaunch('true')}
            />                 
            <Button
                title="set false to first"
                onPress={() => setFirstLaunch('false')}
            />                                    
            <Button
                title="show first"
                onPress={() => showFirstLaunch()}
            />                        
            <Button
                title="refresh async storage"
                onPress={() => refreshAsyncStorage()}
            />                                                
        </>
        */
    );
};


