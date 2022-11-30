/**************** INIT ****************/
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TodoListItem } from 'components';
import { todoInfo } from 'interfaces';

/************** INTERFACE *************/
interface todoListProps {
    todos: todoInfo[]; 
    onRemove: any;
    onToggle: any;
}
  
/************** COMPONENT *************/
const TodoList = ({todos, onRemove, onToggle} : todoListProps) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {todos.map(todo => (
                <TodoListItem 
                    key={todo.id} 
                    {...todo} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                    />
            ))}
        </ScrollView>
    );
};

/**************** STYLE ****************/
const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;