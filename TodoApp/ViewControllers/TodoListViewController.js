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
    }

    componentDidMount() {
        this.loadTodoItems();
    }

    loadTodoItems() {
        let todoItemsPromise = this.todoItemService.getAllTodoItems();
        let doneTodoItemsPromise = this.todoItemService.getAllDoneTodoItems();
        Promise.all([todoItemsPromise, doneTodoItemsPromise]).then(values => {
            this.setState({
                tasks: values[0].reverse(),
                doneTasks: values[1].reverse()
            });
        }, reason => {
            console.log(reason);
            Alert.alert(
                'Error loading to-dos',
                'There was an error loading the to-dos',
                [
                    {text: 'Dismiss'},
                ]
            );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TodoListTableView cellPressCallback={this.listViewCellPressed.bind(this)} tasks={ this.state.tasks } doneTasks={ this.state.doneTasks }/>
                <TodoListAddItemView />
            </View>
        );
    }

    listViewCellPressed(item) {
        let promise;
        if (item.done) {
            promise = this.todoItemService.setNotDone(item);
        } else {
            promise = this.todoItemService.setDone(item);
        }
        let self = this;
        promise.then(function (item) {
            self.loadTodoItems();
        }).catch(function (error) {
            console.log(error);
            Alert.alert(
                'Error',
                'The operation could not be completed',
                [
                    {text: 'Dismiss'},
                ]
            );
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
});
