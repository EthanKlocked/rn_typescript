/**************** INIT ****************/
import { Home, Todo } from 'routes';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { checkFirstLaunch } from 'lib';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/************** COMPONENT *************/
export default function App() {
    //init
    const Stack = createStackNavigator();

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


    useEffect(() => {
        initExec();
    },[]);

    //render
    return (
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
    );
};


