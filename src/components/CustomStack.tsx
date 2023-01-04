/**************** INIT ****************/
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { pageListInfo } from 'interfaces';

/************** INTERFACE *************/
interface pageListProps {
    pageList: pageListInfo; 
}

/************** COMPONENT *************/
const Stack = createStackNavigator();

const CustomStack = ({pageList} : pageListProps) => {
    return (
        <>
            <Stack.Navigator initialRouteName={pageList.initial}>
                {
                    pageList.pages.map((value : any, key : number) => (
                        <Stack.Screen 
                            key={key} 
                            options={{
                                headerShown: value.headerShown,
                            }}
                            {...value} />
                    ))
                }
            </Stack.Navigator>
        </>
    );
};

export default CustomStack;