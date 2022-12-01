/**************** INIT ****************/
import { Text, View } from 'react-native';
import React from 'react';

/************** INTERFACE *************/
interface routerInterface {
    navigation: any; 
}

/************** COMPONENT *************/
export default function TestPage({ navigation } : routerInterface) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>TEST PAGE</Text>
        </View>
    );
}