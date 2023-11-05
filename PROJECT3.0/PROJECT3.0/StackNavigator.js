import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SavedScreen from './screens/SavedScreen'
import BookingScreen from './screens/BookingScreen'
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen'
import { NavigationContainer } from "@react-navigation/native"
import ScanSreen, { } from './screens/ScanScreen'
import SearchScreen from './screens/SearchScreen'
import  PlacesScreen from './screens/PlacesScreen'
import SplashScreen from './screens/SplashScreen'
import OnbordingScreen from './screens/OnbordingScreen'
import { getItem } from './async/asyncStorage'
import MapScreen from './screens/MapScreen'
import PropertyInfo from './screens/PropertyInfoScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import RoomsScreen from './screens/RoomsScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'
import UserScreen from './screens/UserScreen'


const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Entypo name="home" size={24} color="#5DB075" />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        )
                    }}

                />

                <Tab.Screen
                    name="Bookings"
                    component={BookingScreen}
                    options={{
                        tabBarLabel: "Bookings", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="notifications" size={24} color="#5DB075" />
                        ) : (
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        )
                    }}

                />

                <Tab.Screen
                    name="Saved"
                    component={SavedScreen}
                    options={{
                        tabBarLabel: "Saved", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <AntDesign name="heart" size={24} color="#5DB075" />
                        ) : (
                            <AntDesign name="hearto" size={24} color="black" />
                        )
                    }}

                />


                <Tab.Screen
                    name="Scanner"
                    component={ScanSreen}
                    options={{
                        tabBarLabel: "Scanner", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="scan" size={24} color="#5DB075" />
                        ) : (
                            <Ionicons name="scan-outline" size={24} color="black" />
                        )
                    }}

                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="person" size={24} color="#5DB075" />
                        ) : (
                            <Ionicons name="person-outline" size={24} color="black" />
                        )
                    }}

                />




            </Tab.Navigator>
        )
    }
    const [showOnboard, setShowOnboard] = useState(null)
    useEffect(() => {
        checkIfAlreadyOnboarded()
    }, [])

    const checkIfAlreadyOnboarded = async () => {
        let onboarded = await getItem('onboarded')
        if (onboarded == 1) {
            //hide onboarding
            setShowOnboard(false)
        } else {
            //show onbording
            setShowOnboard(true)
        }
    }

    if (showOnboard == null) {
        return null
    }


    if (showOnboard) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Splash'>
                    <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
                    <Stack.Screen name="OnbordingScreen" options={{ headerShown: false }} component={OnbordingScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
                    <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Places" component={PlacesScreen}  options={{ headerShown: false }} />
                    <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Info" component={PropertyInfo} options={{ headerShown: false }} />
                    <Stack.Screen name="Rooms" component={RoomsScreen}  options={{ headerShown: false }}/>
                    <Stack.Screen name="User" component={UserScreen}  options={{ headerShown: false }}/>
                    <Stack.Screen name="Confirmation" component={ConfirmationScreen}  options={{ headerShown: false }} />
                    <StackRouter.Screen name="Saved" component={SavedScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )

    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Splash'>
                    <Stack.Screen name="OnbordingScreen" options={{ headerShown: false }} component={OnbordingScreen} />
                    <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
                    <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Places" component={PlacesScreen} />
                    <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Info" component={PropertyInfo} options={{ headerShown: false }} />
                    <Stack.Screen name="Rooms" component={RoomsScreen} />
                    <Stack.Screen name="User" component={UserScreen} />
                    <Stack.Screen name="Confirmation" component={ConfirmationScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }


}

export default StackNavigator

const styles = StyleSheet.create({})