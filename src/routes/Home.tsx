/**************** INIT ****************/
import { Button, Text, View } from 'react-native';
import React from 'react';

/************** INTERFACE *************/
interface routerInterface {
    navigation: any; 
}

/************** COMPONENT *************/
export default function Home({ navigation } : routerInterface) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome!!</Text>     
            <Button
                title="Go to Todo"
                onPress={() => navigation.navigate("Todo")}
            />            
            <Button
                title="Refresh all stacks"
                onPress={() => navigation.popToTop()}
            />            
        </View>
    );
}