import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, Button, Image, StatusBar, TouchableOpacity, Alert, TextInput } from 'react-native';

export default function CustomButton(props){  
  return (
    <TouchableOpacity style={[styles.button, props.buttonStyle]} onPress={props.onPress}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 120,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 100,
    paddingVertical: 20
  },
  label: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});