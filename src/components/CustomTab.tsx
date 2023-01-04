/**************** INIT ****************/
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { pageListInfo } from 'interfaces';

/************** INTERFACE *************/
interface pageListProps {
    pageList: pageListInfo; 
}

/************** COMPONENT *************/
const Tab = createBottomTabNavigator();

const CustomTab = ({pageList} : pageListProps) => {
    return (
        <Tab.Navigator initialRouteName={pageList.initial}>
            {
                pageList.pages.map((value : any, key : number) => (
                    <Tab.Screen
                        key={key}
                        options={{
                            headerShown: false,
                            title: value.title,
                            tabBarIcon: ({color, size}) => (
                                <Icon name={value.icon} color={color} size={size} />
                            ),
                        }}
                        {...value}
                    />                    
                ))
            }            
        </Tab.Navigator>
    );
};

export default CustomTab;