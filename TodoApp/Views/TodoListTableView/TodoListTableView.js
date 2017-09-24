import React, { Component } from 'react';
import { StyleSheet, SectionList } from 'react-native';
import TodoListItemTableViewCell from './TodoListItemTableViewCell';
import TodoListItemTableViewHeader from './TodoListItemTableViewHeader';

export default class TodoListTableView extends Component {
    render() {

        let tasks = this.props.tasks;
        let doneTasks = this.props.doneTasks;

        return (
            <SectionList
                style = {styles.todoListTableView}
                sections = {[
                    {
                        title: "To Do",
                        data: tasks
                    },
                    {
                        title: "Done",
                        data: doneTasks
                    }
                ]}
                renderSectionHeader={({section}) => <TodoListItemTableViewHeader title={section.title} />}
                renderItem = {({item}) => <TodoListItemTableViewCell item={item} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    todoListTableView: {
        backgroundColor: '#446CB3'
    },
});
