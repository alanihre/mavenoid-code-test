import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

export default class TodoListAddItemView extends Component {
    constructor() {
        super();
        this.state = {
            textInputValue: null,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.addIcon}>+</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter a new to-do"
                    onChangeText={(text) => this.setState({textInputValue: text})}
                    onSubmitEditing={this.textInputSubmitted.bind(this)}
                    value={this.state.textInputValue}
                    returnKeyType={'done'}
                />
            </View>
        );
    }


    textInputSubmitted() {
        if (this.state.textInputValue && this.state.textInputValue.length > 0) {
            this.props.newTodoItemSubmittedCallback(this.state.textInputValue);

            //Clear the text field
            this.setState({textInputValue: ''});
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 44,
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'gray',
    },
    textInput: {
        height: 40,
    },
    addIcon: {
        fontSize: 20,
        textAlign: 'center',
        height: 25,
        marginRight: 5,
        textAlignVertical: 'center',
        width: 25,
        paddingTop: 5
    }
});
