import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TodoListItemTableViewHeader extends Component {
    render() {
        return (
            <View style={styles.todoListItemTableViewHeader}>
                <Text style={styles.todoListItemTableViewHeaderTitle}>{this.props.title}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    todoListItemTableViewHeader: {
        height: 30,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#2C3E50'
    },
    todoListItemTableViewHeaderTitle: {
        fontSize: 15,
        color: '#ecf0f1'
    }
});
