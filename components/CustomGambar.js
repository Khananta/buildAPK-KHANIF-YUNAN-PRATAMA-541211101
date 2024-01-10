import { StyleSheet, View, Image } from 'react-native';

export default function CustomGambar({ src }) {
  return (
    <View>
      <Image 
        source={src}
        style={[styles.image, src.imageStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 16,
    borderRadius: 16,
    width: '100%',
    height: 250,
  },  
});