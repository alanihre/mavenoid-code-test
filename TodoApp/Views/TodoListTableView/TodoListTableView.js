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
                renderItem = {({item}) => <TodoListItemTableViewCell cellPressCallback={this.cellPressed.bind(this)} item={item} />}
            />
        );
    }

    cellPressed(item) {
        this.props.cellPressCallback(item);
    }
}

const styles = StyleSheet.create({
    todoListTableView: {

    },
});
