/**************** INIT ****************/
import React from 'react';
import { Text, ScrollView, View, ImageBackground, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import flowingHoney from 'data/image/flowingHoney.png';
import { MaterialCommunityIcons, Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
  
/************** INTERFACE *************/
interface routerInterface {
    navigation: any; 
}

/************** COMPONENT *************/
const Login = ({navigation} : routerInterface) => {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            bounces={false}
        >
            {/* Brand View */}
            <ImageBackground 
                source={flowingHoney}
                style={styles.brandView}
            >
                <View style={styles.logoView}>
                    <MaterialCommunityIcons name="bird" color="#999" size={80}></MaterialCommunityIcons>
                    <Text style={styles.logoText}>HONEY BIRD</Text>
                </View>
            </ImageBackground>

            {/* login View */}
            <View style={styles.loginView}>
                <View style={{padding:40}}>
                    {/* Welcome View */}
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <View style={styles.welcomeSub}>
                        <Text style={styles.normalText}>Don,t have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.registerText}>{'  '}Register now</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Form Inputs View */}
                    <View style={{marginTop:15}}>
                        <View style={styles.itemView}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputRow}>
                                <TextInput style={styles.input} />
                                <Ionicons name="checkmark-sharp" size={20} color="brown"/>
                            </View>
                        </View>
                        <View style={styles.itemView}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputRow}>
                                <TextInput style={styles.input} />
                                <Ionicons name="eye" size={18} color="brown"/>                                
                            </View>
                        </View>
                    </View>
                    {/* Forgot Password & Remember Me View */}
                    <View style={styles.subFormView}>
                        <TouchableOpacity style={styles.forgotView}>
                            <Ionicons name="checkmark-circle" size={20} color="orange"/>
                            <Text style={styles.normalText}>Remember Me</Text>
                        </TouchableOpacity>                            
                        <TouchableOpacity style={styles.rememberView}>
                            <Text style={styles.normalText}>Forgot Password</Text>
                        </TouchableOpacity>                        
                    </View>
                    {/* Login Button & Social Login Button View */}
                    <View style={styles.loginButtonView}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace("StartGuide")}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.loginWidth}>or Login With</Text>
                        <View style={styles.socialLoginView}>
                            <Entypo name="facebook-with-circle" color="#4267B2" size={50}/>                            
                            <FontAwesome name="google-plus-official" color="#DB4437" size={50}/>
                            <Entypo name="instagram-with-circle" size={50}/>                            
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

/**************** STYLE ****************/
const displayHeight = Dimensions.get('window').height;
const displayWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor:'white'
    },
    brandView:{
        height: displayHeight/4.5
    },
    logoView:{
        flex:1,
        top:120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText:{
        color:'#777',
        fontSize:25,
    },
    loginView:{
        //IOS
        shadowColor: "#555", 
        shadowOpacity: 0.3,
        shadowOffset: { width:3, height: -4 }, 

        //ANDROID
        elevation: 3,        

        flex:1.5,
        backgroundColor:'white',
        bottom:-115,
        borderTopStartRadius:60,
        borderTopEndRadius:60
    },
    welcomeText:{
        color:'gold', 
        fontSize:34
    },
    welcomeSub:{
        flexDirection:'row'
    },
    registerText:{
        color:'orange', 
        fontStyle:'italic'
    },
    itemView: {
        paddingTop:10,
        borderBottomWidth:2,
        borderBottomColor: 'orange',
    },
    label: {
        flex: 1,
        fontSize:18,
        color:'#aaa',
        paddingBottom:3
    },
    inputRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },    
    input: {
        flex: 1,
        backgroundColor: 'white', 
        paddingBottom:8,
        paddingTop:5,
    },
    subFormView: {
        height:50,
        marginTop:0,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    forgotView: {
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    rememberView: {
        
    },
    loginButtonView: {
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },
    loginButton: {
        alignItems:'center',
        backgroundColor:'orange',
        width:displayWidth/2,
        height:40,
        borderRadius:50,
        justifyContent:'center',
    },
    loginText: {
        color:'white',
        fontSize:15
    },
    loginWidth: {
        textAlign:'center',
        color:'#555'
    },
    socialLoginView: {
        paddingTop:25,
        flexDirection:'row',
        width:displayWidth/1.5,
        justifyContent:'space-around',
        alignSelf:'center'
    },
    normalText: {
        color:"#444"
    }
});

export default Login;