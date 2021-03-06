import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo"/>
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go To List Demo"/>
      <Button 
        onPress={() => navigation.navigate('ImageScreen')}
        title="Go To Image Demo"/>
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go To Counter Demo"/>
      <Button 
        onPress={() => navigation.navigate('ColorScreen')}
        title="Go To Color Demo"/>
      <Button 
        onPress={() => navigation.navigate('SquareScreen')}
        title="Go To Square Demo"/>
      <Button 
        onPress={() => navigation.navigate('TextScreen')}
        title="Go To Text Demo"/>
      <Button 
        onPress={() => navigation.navigate('BoxScreen')}
        title="Go To Box Demo"/>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
