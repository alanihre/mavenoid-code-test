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
        height: 27,
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    todoListItemTableViewHeaderTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});
