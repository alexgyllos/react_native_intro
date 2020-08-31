import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
import beach from '../assets/beach.jpg';
import forest from '../assets/forest.jpg';
import mountain from '../assets/mountain.jpg';

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail title="Forest" image={forest} score={9}/>
            <ImageDetail title="Beach" image={beach} score={5}/>
            <ImageDetail title="Mountain" image={mountain} score={3}/>
        </View>     
    )
};

const styles = StyleSheet.create({
    
})

export default ImageScreen;