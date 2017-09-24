import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import TodoListTableView from 'TodoApp/Views/TodoListTableView/TodoListTableView';
import TodoItemService from 'TodoApp/Services/TodoItemService';
import TodoListAddItemView from 'TodoApp/Views/TodoListAddItemView';

export default class TodoListViewController extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            doneTasks: []
        };

        this.todoItemService = new TodoItemService();

        let todoItemsPromise = this.todoItemService.getAllTodoItems();
        let doneTodoItemsPromise = this.todoItemService.getAllDoneTodoItems();
        Promise.all([todoItemsPromise, doneTodoItemsPromise]).then(values => {
            this.setState({
                tasks: values[0],
                doneTasks: values[1]
            });
        }, reason => {
            console.log(reason);
            Alert.alert(
                'Error loading to-dos',
                'There was an error loading the to-dos',
                [
                    {text: 'Dismiss'},
                ]
            )
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TodoListTableView tasks={ this.state.tasks } doneTasks={ this.state.doneTasks }/>
                <TodoListAddItemView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
});
