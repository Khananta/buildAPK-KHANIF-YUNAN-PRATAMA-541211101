import { Text, SafeAreaView, TouchableOpacity, StyleSheet, View, Image, Button, Alert, ScrollView, StatusBar, Linking } from 'react-native';

import { Card } from 'react-native-paper';

import { FontAwesome } from '@expo/vector-icons';

import CustomGambar from './CustomGambar';

import LikeDislikeButton from './LikeDislike';

export default function App({ navigation }) {

  const instagram = () => {
    Linking.openURL('https://www.instagram.com/khananta_/');
  };

  const dribbble = () => {
    Linking.openURL('https://dribbble.com/Khananta');
  };

  const linkedin = () => {
    Linking.openURL('https://www.linkedin.com/in/khanif-yunan-pratama-2b8329261/');
  };

  const email = () => {
    Linking.openURL('https://mail.google.com/mail/u/0/?ogbl');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    
    {/* SC-1 */}
    <Image
        style={styles.profile}
        source={require('../assets/Profile-Khananta.png')}
      />
      
    <Text style={styles.title}>Khananta <FontAwesome name="star" size={24} color="gold" /></Text>
    <Text style={styles.category}>UI/UX Designer</Text>
    <TouchableOpacity
        style={styles.button}
        onPress={email}
      >
        <Text style={styles.buttonText}><FontAwesome name="envelope"size={24} color="white" />   HireMe</Text>
      </TouchableOpacity>
    <Text style={styles.hr}></Text>

    {/* SC-2 */}
    <Text style={styles.judul}>About Me</Text>
    <Text style={styles.paragraph}>
    My full name is Khanif Yunan Pratama, currently 17 years old. I am a student at SMK Telkom Purwokerto, in 12th grade. One of my hobbies is listening to music. Additionally, I have an interest in UI/UX design, which drives me to delve deeper   into the creative aspects of technology and user interfaces.
    </Text>
    <Text style={styles.hr}></Text>

    {/* SC-3 */}
    <Text style={styles.judul}>Social Media</Text>
    <TouchableOpacity onPress={instagram}>
    <Text style={styles.sm}><FontAwesome name="instagram" size={24} color="black" />    Instagram</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={dribbble}>
      <Text style={styles.sm}><FontAwesome name="dribbble" size={24} color="black" />    Dribbble</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={linkedin}>
      <Text style={styles.sm}><FontAwesome name="linkedin" size={24} color="black" />    Linkedin</Text>
    <Text style={styles.hr}></Text>
    </TouchableOpacity>

    {/* SC-4 */} 
    <Text style={styles.judul}>My Project</Text>
    
    <CustomGambar 
      src={require('../assets/Project-1.png')}
    />

    <LikeDislikeButton />

    <CustomGambar 
      src={require('../assets/Project-2.png')}
    />

    <LikeDislikeButton />

    <CustomGambar 
      src={require('../assets/Project-3.png')}
    />

    <LikeDislikeButton />


    <Text style={styles.hr}></Text>
    
    {/* SC-4 */} 
    <Text style={styles.judul}>My Certificate</Text>

    <CustomGambar 
      src={require('../assets/Certificate-1.jpg')}
    />

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginTop: 18,
    color: '252525',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 32,
  },
  paragraph: {
    marginTop: 8,
    textAlign: 'justify',
  },
  profile: {
    marginTop: 40,
    height: 120,
    width: 120,
  },
  hr: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  judul: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    fontColor: '#252525',
  },
  category: {
    marginTop: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 100,
    borderColor: '#252525',
    paddingLeft: 16,
    marginRight: 235,
    marginBottom: 24,
  },
  sm: {
    marginTop: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 100,
    borderColor: '#252525',
    paddingLeft: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#252525',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});