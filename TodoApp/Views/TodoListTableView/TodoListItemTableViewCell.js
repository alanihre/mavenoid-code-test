import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class TodoListItemTableViewCell extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.cellPressCallback}>
                <View style={styles.todoListItemTableViewCell}>
                    <Text style={styles.todoListItemTableViewCellText}>{this.props.item.title}</Text>
                </View>
            </TouchableHighlight>
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
