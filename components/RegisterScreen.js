import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, Button, Image, StatusBar, TouchableOpacity, Alert, TextInput, Linking } from 'react-native';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

export default function RegisterScreen({ navigation }) {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Image
        style={styles.banner}
        source={require('../assets/Register.png')}
      />

      <CustomInput 
        label="Name"
        placeholder="Enter your full name"
        value={text}
        onChangeText={setText}/>

      <CustomInput 
        label="Date of birth"
        placeholder="Place and date of birth"
        value={text}
        onChangeText={setText}/>

      <CustomInput 
        label="Location"
        placeholder="Enter your location"
        value={text}
        onChangeText={setText}/>
      
      <CustomInput 
        label="Gender"
        placeholder="Man/Woman"
        value={text}
        onChangeText={setText}/>

      <CustomButton 
        label="Register"
        buttonStyle={{backgroundColor: '#21B06E'}}
        onPress={() => navigation.navigate('Portofolio')}
        
      />

      <Text
      style={styles.span}>
        Have account?  <TouchableOpacity onPress={() => navigation.navigate('Login')} ><Text style={styles.subTitle3}>Login</Text></TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    marginTop: 24,
  },
  banner: {
    marginTop: 0,
    height: 150,
    width: '100%', 
    marginBottom: 8,
  },
  subTitle3: {
    fontWeight: 'bold',
    color: '#21B06E',
    marginTop: 18,
    fontSize: 16,
  },
  span: {
    textAlign: 'center',
    marginTop: 16,
  },
});