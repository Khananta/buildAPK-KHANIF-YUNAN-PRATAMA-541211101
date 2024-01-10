import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Pressable, Text, Button, Image, StatusBar, TouchableOpacity, Alert, TextInput } from 'react-native';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

export default function LoginScreen({ navigation }) {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Image
        style={styles.banner}
        source={require('../assets/Login.png')}
      />

      <CustomInput 
        label="Medical record number"
        placeholder="Enter your medical record number"
        value={text}
        onChangeText={setText}/>

      <CustomInput 
        label="Username"
        placeholder="Enter your username"
        value={text}
        onChangeText={setText}/>

      <CustomInput 
        label="Password"
        placeholder="Enter your password"
        value={text}
        onChangeText={setText}/>

      <Text style={styles.subTitle2}>Forgot Password ?</Text>

      <CustomButton
        buttonStyle={{backgroundColor: '#0D6EFD'}} 
        label="Login"
        onPress={() => navigation.navigate('Portofolio')}
      />

      <Text
      style={styles.span}>
        Not have account?  <TouchableOpacity onPress={() => navigation.navigate('Register')} ><Text style={styles.subTitle3}>Register</Text></TouchableOpacity>
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
  subTitle2: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#0D6EFD',
  },
  subTitle3: {
    fontWeight: 'bold',
    color: '#0D6EFD',
    marginTop: 18,
    fontSize: 16,
  },
  span: {
    textAlign: 'center',
    marginTop: 16,
  },
});