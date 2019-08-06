//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import RouteKey from '../Routes/routeKeys';

// create a component
class Splash extends Component {


    navigate() {
        setTimeout(() => {
            Actions[RouteKey.QA]()
        }, 3000)
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Quiz Application</Text>
                <Spinner />
                {this.navigate()}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'serif'
    }
});

//make this component available to the app
export default Splash;
