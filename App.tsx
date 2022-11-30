/**************** INIT ****************/
import { Home, Todo } from './src/routes';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/************** INTERFACE *************/
interface routerInterface {
    navigation: any; 
};

/************** COMPONENT *************/
export default function App() {
    //init
    const Stack = createStackNavigator();

    //render
    return (
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
    );
};


