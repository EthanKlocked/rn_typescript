/**************** INIT ****************/
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { pageListInfo } from 'interfaces';

/************** INTERFACE *************/
interface pageListProps {
    pageList: pageListInfo; 
}

/************** COMPONENT *************/
const Drawer = createDrawerNavigator();

const DrawerContent = (props : any) => {
    return (
        <View style = {styles.contentContainer} >
            <DrawerContentScrollView {...props}>
                <View style={styles.contentHeader}>
                    <View>
                        <Text>로그인 사용자: TEST(2022XXXXX)</Text>
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

const HeaderR = ()  => {
    return ( <Ionicons name="notifications-outline" size={30}></Ionicons>);
}

const CustomDrawer = ({pageList} : pageListProps) => {
    return (        
        <Drawer.Navigator 
            initialRouteName={pageList.initial}
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'gold',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: '',
                overlayColor: 'rgba(255, 255, 255, 0.5)',
                drawerActiveTintColor:'#555',
                drawerActiveBackgroundColor:'gold',
                drawerInactiveTintColor:'orange',
            }}
            drawerContent={props => <DrawerContent {...props} /> } 
        >
            {
                pageList.pages.map((value : any, key : number) => (
                    <Drawer.Screen 
                        key={key}
                        options={{
                            drawerLabel: value.title,
                            headerTitle: () => (
                                <MaterialCommunityIcons name="egg-easter" color="orange" size={35}></MaterialCommunityIcons>
                            ),
                            headerTitleAlign: 'center',
                            headerRight: ()=> <HeaderR/>,
                            headerRightContainerStyle: {paddingRight: 10},
                            headerLeftContainerStyle: {paddingRight: 10}
                        }}
                        {...value}
                    />                     
                ))
            }
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
        backgroundColor: '#ffdc73',
        marginBottom: 10,
    },
    LogoutButton:{
        position: 'absolute',
        right: 10,
        left: 10,
        bottom: 280,
        backgroundColor: '#ffdc73',
        padding: 10,
        borderRadius: 3
    },
    logoutBox: {
        flex: 1,
        width:200,
        height:0,
        backgroundColor: '#ffdc73',
    },
    logoutText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})

export default CustomDrawer;