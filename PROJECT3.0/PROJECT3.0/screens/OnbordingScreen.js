import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
const { width, height } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import { setItem } from '../async/asyncStorage'




const OnbordingScreen = () => {

    const navigation = useNavigation()

    const handleDone = () => {
        navigation.navigate('Login')
        setItem('onboarded','1')

    }

    const doneButton = ({ ...props }) =>{
        return (
        <TouchableOpacity style ={{alignItems:"center",padding:20,backgroundColor:"",color:"white"}} {...props}>
            <Text>Lets Travel</Text>
        </TouchableOpacity>
    )
}




return (
    <View style={styles.container}>
        <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            DoneButtonComponent={doneButton}
            
            bottomBarHighlight={false}
            containerStyles={{ paddingHorizontal: 15 }}
            pages={[
                {
                    backgroundColor: '#fef3d0',
                    image: (
                        <View style={{ width: 300, height: 400 }}>
                            <LottieView source={require('../assets/animations/Animation - 1696344254210.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Travel With Travel Guide',
                    subtitle: 'You can book private city tours with local on-the-go and experience a new place like never before',
                },
                {
                    backgroundColor: '#a7f3d0',
                    image: (
                        <View style={{ width: width * 0.9, height: width }}>
                            <LottieView source={require('../assets/animations/Animation - 1696345043926.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Enjoy Your Travels',
                    subtitle: 'Plan Your Trip,choose your destnation.Pick the best localguid for your holiday',
                },
                {
                    backgroundColor: '#fff',
                    image: (
                        <View style={{ width: width * 0.9, height: width }}>
                            <LottieView source={require('../assets/animations/Animation - 1696346107865.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Share Your Adventures',
                    subtitle: 'Enjoy your holiday!dont forget to take a photo and share to the world',
                },

            ]}
        />
    </View>
)
}

export default OnbordingScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})