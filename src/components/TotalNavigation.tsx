/**************** INIT ****************/
import React from 'react';
import { CustomDrawer, CustomStack, CustomTab } from 'components';
import { 
    Login, 
    StartGuide, 
    Home, 
    Todo 
} from 'routes';
import { NavigationContainer } from '@react-navigation/native';

/************** COMPONENT *************/
/* 1. PAGES GUIDE
interface pageList {
    initial : string;
    pages : any[];
}
*/

/*########## STACK ##########*/    
//<< DEPTH 1 >>//
const StartStack = () => {
    return(
        <CustomStack 
            pageList={
                {
                    initial : "Login",
                    pages : [
                        {
                            name : 'Login', 
                            component : Login,
                            headerShown : false
                        },                        
                        {
                            name : 'StartGuide', 
                            component : StartGuide,
                            headerShown : false
                        },
                        {
                            name : 'Main', 
                            component : MainDrawer,
                            headerShown : false
                        }
                    ]
                }
            }    
        />
    )    
}

//<< DEPTH 4 >>//
const HomeStack = () => {
    return(
        <CustomStack 
            pageList={
                {
                    initial : "Home",
                    pages : [
                        {
                            name : 'Home',
                            component : Home
                        },
                        {
                            name : 'Todo',
                            component : Todo
                        }
                    ]
                }
            }    
        />
    )
}

const TodoStack = () => {
    return(
        <CustomStack 
            pageList={
                {
                    initial : "Todo",
                    pages : [
                        {
                            name : 'Home',
                            component : Home
                        },
                        {
                            name : 'Todo',
                            component : Todo
                        }
                    ]
                }
            }    
        />
    )
}

/*########### TAB ###########*/
//<< DEPTH 3 >>//
const MainTab = () => {
    return(
        <CustomTab 
            pageList={
                {
                    initial : "Home",
                    pages : [
                        {
                            name : 'Home',
                            component : HomeStack,
                            title : "???",
                            icon : "home"
                        },
                        {
                            name : 'Todo',
                            component : TodoStack,
                            title : '?????????',
                            icon : 'notifications'
                        }
                    ]
                }
            }        
        />
    )
}

/*########## DRAWER #########*/
//<< DEPTH 2 >>//
const MainDrawer = () => {
    return(
        <CustomDrawer 
            pageList={
                {
                    initial : "StartGuide",
                    pages : [
                        {
                            name : 'Home',
                            component : MainTab,
                            title : '???'
                        }
                    ]
                }
            }
        />
    )
}

/*########### NAV ###########*/
const TotalNavigation = () => {
    //render
    return(
        <NavigationContainer>
            <StartStack />
        </NavigationContainer>    
    )
}

export default TotalNavigation;