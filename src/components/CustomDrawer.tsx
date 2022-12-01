/**************** INIT ****************/
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Home, Todo } from 'routes';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

/************** COMPONENT *************/
const DrawerContent = (props : any) => {
    return (
        <View style = {styles.contentContainer} >
            <DrawerContentScrollView {...props}>
                <View style={styles.contentHeader}>
                    <View>
                        <Text>로그인 사용자: 홍길동(2018xxxxxx)</Text>
                    </View>
                    <Ionicons name="person-circle-outline" size={35}></Ionicons>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity
                style={styles.LogoutButton}
                onPress={() => {console.log('Link to logout')}}
            >
                <Text style = {styles.logoutText}>로그아웃</Text>
            </TouchableOpacity>
        </View>
    );
};
function HeaderR() {
    return ( <Ionicons name="notifications-outline" size={30}></Ionicons>);
}

const CustomDrawer = () => {
    return (        
        <Drawer.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: '',
            }}
            drawerContent={props => <DrawerContent {...props} /> } 
        >
            <Drawer.Screen 
                name="Home" 
                component={Home} 
                options={{
                    drawerLabel: 'Home',
                    headerTitle: () => (
                        <Text>TEST</Text>
                    ),
                    headerTitleAlign: 'center',
                    headerRight: ()=> <HeaderR/>,
                    headerRightContainerStyle: {paddingRight: 10},
                    headerLeftContainerStyle: {paddingRight: 10}
                }}
            /> 
            <Drawer.Screen 
                name="Todo" 
                component={Todo} 
                options={{
                    drawerLabel: 'Todo',
                    headerTitle: () => (
                        <Text>TEST</Text>
                    ),
                    headerTitleAlign: 'center',
                    headerRight: ()=> <HeaderR/>,
                    headerRightContainerStyle: {paddingRight: 10},
                    headerLeftContainerStyle: {paddingRight: 10}
                }}
            /> 
            {/*<Drawer.Screen name="열람실 좌석 배정" component={ReadingRoom} />*/} 
        </Drawer.Navigator >
    );
}

/**************** STYLE ****************/
const styles = StyleSheet.create({
    contentContainer:{
        flex: 1
    },
    contentHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f6f6f6',
        marginBottom: 10,
    },
    LogoutButton:{
        position: 'absolute',
        right: 10,
        left: 10,
        bottom: 280,
        backgroundColor: '#009DAE',
        padding: 10,
        borderRadius: 3
    },
    logoutBox: {
        flex: 1,
        width:200,
        height:0,
        backgroundColor: '#009DAE',
    },
    logoutText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})

export default CustomDrawer;