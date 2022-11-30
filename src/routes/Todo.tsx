/**************** INIT ****************/
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TodoInsert, TodoList } from '../components';
import { todoInfo } from '../interfaces';
import React, { useState } from 'react';

/************** INTERFACE *************/
interface routerInterface {
    navigation: any; 
}

/************** COMPONENT *************/
export default function Todo({ navigation } : routerInterface) {
    //state
    const [ todos, setTodos ] = useState<todoInfo[]>([]);

    //function
    const addTodo = (text : string) => {
        let updateItem : todoInfo = {
            id: Math.random().toString(),
            textValue: text,
            checked :false
        };

        let updateList : todoInfo[] = [ ...todos, updateItem ];

        setTodos( updateList );
    };

    const onRemove = (id : string) => (e : object) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onToggle = (id : string) => (e : object) => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, checked : !todo.checked} : todo)
        )
    }

    //render
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>Hello Todolist</Text>
        <View style={styles.card}>
            <TodoInsert onAddTodo={addTodo}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </View>
        </SafeAreaView>
    );
}

/**************** STYLE ****************/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3143e8',
    },
    appTitle: {
        color: '#fff',
        fontSize: 36,
        marginTop: 30,
        marginBottom: 30,
        fontWeight: '300',
        textAlign: 'center',
        backgroundColor: '#3143e8',
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 10, // to provide rounded corners
        borderTopRightRadius: 10, // to provide rounded corners
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },  
});