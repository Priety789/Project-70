import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    render() {
        return (
            <View>
                <Header
                    backgroundColor={'pink'}
                    centerComponent={{
                        text: "Bedtime Stories",
                        style: {color: 'white', fontSize: 20}
                    }} />
                <TextInput
                    placeholder="Story Title" />
                <TextInput
                    placeholder="Story Author" />
                <TextInput
                    placeholder="Story" />
                <TouchableOpacity
                    style={styles.submitButton}>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    submitButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        width: 80,
        height: 40
    }
})