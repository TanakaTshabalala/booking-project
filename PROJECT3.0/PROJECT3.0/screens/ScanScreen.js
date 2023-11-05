import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { View, Text, TextInput, Button, Linking, Image, StyleSheet, Pressable } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const ScanScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCameraOpen, setCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Scanner",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#5DB075",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  useEffect(() => {
    Camera.requestCameraPermissionsAsync();
  }, []);

  const openCamera = () => {
    setCameraOpen(true);
  };

  const takePicture = async () => {
    if (isCameraOpen) {
      if (cameraRef.current) {
        const { uri } = await cameraRef.current.takePictureAsync();
        setCameraOpen(false);
        setCapturedImage(uri);
      }
    }
  };

  const retakePicture = () => {
    setCapturedImage(null); // Clear the captured image
    setCameraOpen(true); // Reopen the camera
  };
  
  const clearSearchQuery = () => {
    setSearchQuery(''); // Clear the text input
  };

  const handleSearchImages = () => {
    if (capturedImage) {
      const searchQuery = encodeURIComponent(`image-url:${capturedImage}`);
      const searchURL = `https://www.google.com/searchbyimage?image_url=${searchQuery}`;
      Linking.openURL(searchURL);
    }
  };

  const handleSearchWeb = () => {
    if (searchQuery) {
      const searchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      Linking.openURL(searchURL);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Google Search</Text>
        <TextInput
          style={styles.input}
          placeholder="Google search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
         {searchQuery.length > 0 && (
            <Button title="x" onPress={clearSearchQuery} style={styles.clearButton} />
          )}
        <Pressable onPress={handleSearchWeb} style={{ paddingHorizontal: 75, borderColor: "#5DB075", borderWidth: 2, paddingVertical: 15, backgroundColor: "#5DB075", borderRadius: 50 }}>
          <Text style={{ color: "white" }}>Search Web</Text>
        </Pressable>
      </View>

      {isCameraOpen ? (
        <Camera style={styles.camera} ref={cameraRef}>
          <View style={styles.cameraButtonContainer}>
          <Pressable onPress={takePicture} >
          <MaterialIcons name="camera" size={50} color="white" />
        </Pressable>
          </View>
        </Camera>
      ) : (
        <View style={styles.preview}>
          {capturedImage ? (
            <>
              <Image source={{ uri: capturedImage }} style={styles.image} />
              <Button title="Go to search images" onPress={handleSearchImages} />
              <Button title="Retake Picture" onPress={retakePicture} />
            </>
          ) : (
            <Button title="Open Camera" onPress={openCamera} />
          )}
        </View>
      )}
    </View>
  );
}

export default ScanScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "500",
    color: "#5DB075"

  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 75,
    borderColor: "#5DB075",
    borderWidth: 2,
    paddingVertical: 15,
    marginBottom:20
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  cameraButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  clearButton: {
    padding: 5,
  },
});