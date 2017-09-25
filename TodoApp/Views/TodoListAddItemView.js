import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

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
                <Image style={styles.addIcon} source={require('TodoApp/resources/img/add_icon.png')} />
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
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'gray',
    },
    textInput: {
        height: 45,
    },
    addIcon: {
        height: 20,
        marginRight: 10,
        width: 20,
        marginTop: 12 //Not 15 to align with text input text
    }
});
