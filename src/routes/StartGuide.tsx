/**************** INIT ****************/
import React from 'react';
import { Text, Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
  
/************** INTERFACE *************/
interface routerInterface {
    navigation: any; 
}

/************** COMPONENT *************/
const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const StartGuide = ({navigation} : routerInterface) => {
    return (
        <SwiperFlatList
            index={0}
            showPagination
            data={colors}
            paginationStyle={styles.pagination}
            renderItem={({ item }) => (
                <View style={[styles.child, { backgroundColor: item }]}>
                    <Text style={styles.text}>{item}</Text>
                    {item=='teal' 
                        ? 
                        <TouchableOpacity style={styles.startButton} onPress={() => navigation.replace("Main")}>
                            <Text style={styles.startText}>START</Text>
                        </TouchableOpacity>                        
                        : null
                    }
                </View>
            )}
        />
    );
};

/**************** STYLE ****************/
const { width } = Dimensions.get('window');
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'white' 
    },
    child: { 
        width, 
        justifyContent: 'center' 
    },
    text: { 
        fontSize: width * 0.5, 
        textAlign: 'center' 
    },
    pagination: {
        paddingBottom:'20%'
    },
    startButton: {
        position: 'absolute',
        alignSelf:'center',
        bottom:170,
    },
    startText: {
        color: 'white',
        justifyContent: 'center',
        fontSize:30,
        fontWeight:'bold'
    },    
});

export default StartGuide;