import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class LikeDislikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleLike} style={styles.button}>
          <Text><FontAwesome name="thumbs-up" size={24} color="black" /></Text>
        </TouchableOpacity>
        <Text>{this.state.likes}</Text>
        <TouchableOpacity onPress={this.handleDislike} style={styles.button}>
          <Text><FontAwesome name="thumbs-down" size={24} color="black" /></Text>
        </TouchableOpacity>
        <Text>{this.state.dislikes}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default LikeDislikeButton;