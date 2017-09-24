import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class TodoListAddItemView extends Component {
    render() {
        return (
            <View style={styles.todoListAddItemView}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoListAddItemView: {
        height: 44,
        backgroundColor: 'red'
    },
});
