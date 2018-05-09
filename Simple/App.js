/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import * as ScreenHelper from 'react-native-peiwen-screen-helper';

type Props = {};
export default class App extends Component<Props> {

    componentWillMount() {
        console.log("SCREEN_WIDTH : " + ScreenHelper.SCREEN_WIDTH);
        console.log("SCREEN_HEIGHT : " + ScreenHelper.SCREEN_HEIGHT);
        console.log("SCREEN_SCALE : " + ScreenHelper.SCREEN_SCALE);
        console.log("BASE_SCALE: " + ScreenHelper.BASE_SCALE);
        console.log("BASE_WIDTH: " + ScreenHelper.BASE_WIDTH);
        console.log("BASE_HEIGHT: " + ScreenHelper.BASE_HEIGHT);
        ScreenHelper.BASE_WIDTH = 640 / ScreenHelper.BASE_SCALE;
        ScreenHelper.BASE_HEIGHT = 960 / ScreenHelper.BASE_SCALE;
        console.log("BASE_SCALE: " + ScreenHelper.BASE_SCALE);
        console.log("BASE_WIDTH: " + ScreenHelper.BASE_WIDTH);
        console.log("BASE_HEIGHT: " + ScreenHelper.BASE_HEIGHT);
        console.log("isAndroid: " + ScreenHelper.isAndroid());
        console.log("isIphone: " + ScreenHelper.isIphone());
        console.log("isIphoneX: " + ScreenHelper.isIphoneX());
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            ...ScreenHelper.ifAndroid(
                {marginBottom: 5},
                ...ScreenHelper.ifIphoneX(
                    {marginBottom: 15},
                    {marginBottom: 25}
                )
            )
        },
    })
;
