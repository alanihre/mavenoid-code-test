import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TodoListItemTableViewCell extends Component {
    render() {
        return (
            <View style={styles.todoListItemTableViewCell}>
                <Text style={styles.todoListItemTableViewCellText}>{this.props.item.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoListItemTableViewCell: {
        padding: 10,
        height: 44,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    todoListItemTableViewCellText: {
        fontSize: 18,
    }
});
