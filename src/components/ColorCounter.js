import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({title, onIncrease, onDecrease}) => {
  return(
      <View>
          <Text>{title}</Text>
          <Button title={`Increase ${title}`} onPress={() => onIncrease()}/>
          <Button title={`Decrease ${title}`} onPress={() => onDecrease()}/>
      </View>
  )  
};

const styles = StyleSheet.create({});

export default ColorCounter;