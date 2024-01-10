import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, Button, Image, StatusBar, TouchableOpacity, Alert, TextInput } from 'react-native';

export default function CustomInput(props) {
  const [text, onChangeText] = React.useState('');
  
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.input, props.inputStyle]}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    marginTop: 8,
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 24,
    width: '100%',
    borderRadius: 100,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'left',
    fontSize: 16,
  },  
});