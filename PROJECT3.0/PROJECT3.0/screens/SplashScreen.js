import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';

import { StatusBar } from 'expo-status-bar'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        console.log('Splash screen useEffect executed'); // Add this line for debugging
        setTimeout(() => {
            console.log('Navigating to Home'); // Add this line for debugging
            navigation.navigate('OnbordingScreen');
        }, 5000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo5.jpg')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Tourist Guide</Text>
            </View>
            <View>
                <Text style={styles.slogan}>Helping you enjoy your vacation</Text>
            </View>
        </View>
    );
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#5DB075",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    text: {
        fontSize: 34,
        color: 'white',
        padding: 1,
        borderRadius: 5,
        fontWeight: 'bold'
    },
    slogan: {
        padding: 20,
        color: 'white'

    }

});