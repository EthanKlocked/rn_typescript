/**************** INIT ****************/
import { Button, Text, View } from 'react-native';
import React from 'react';

/************** INTERFACE *************/
interface routerInterface {
    navigation: any; 
}

/************** COMPONENT *************/
export default function DetailsScreen({ navigation } : routerInterface) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome!!</Text>
            <Button
                title="Todo"
                onPress={() => navigation.push('Todo')}
            />
            <Button
                title="Refresh all stacks"
                onPress={() => navigation.popToTop()}
            />            
        </View>
    );
}