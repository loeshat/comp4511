import React, { useState } from 'react';
import profile from './assets/pic.jpg';
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';

const App = () => {
  const [showImage, setShowImage] = useState(true);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Leo's Fun Facts!</Text>
      {showImage && (
        <TouchableOpacity onPress={() => alert("This was taken in Nara in the holidays!")}>
          <Image
            style={styles.image}
            source={profile}
            />
        </TouchableOpacity>
          )}
      <View style={styles.navbar}>
      <TouchableOpacity style={styles.button} onPress={toggleImage}>
        <Text style={styles.navbarText}>{showImage ? 'Hide Profile Picture' : 'Show Profile Picture'}</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.factHeader}>Fact 1</Text>
      <Text style={styles.fact}>I am currently at the Gold Coast playing Oztag for Unigames!</Text>
      <Text style={styles.factHeader}>Fact 2</Text>
      <Text style={styles.fact}>My favourite restaurant on campus is Yallah Eats</Text>
      <Text style={styles.factHeader}>Fact 3</Text>
      <Text style={styles.fact}>I am 1.75m tall</Text>
      <Text style={styles.factHeader}>Fact 4</Text>
      <Text style={styles.fact}>My favourite brand is Adidas</Text>
      <Text style={styles.factHeader}>Fact 5</Text>
      <Text style={styles.fact}>My COMP4511 journey is only just beginning :D</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    width: '100%',
    backgroundColor: '#879bff',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingTop: 60,
    textAlign: 'center',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'top',
    backgroundColor: '#879bff',
    padding: 20,
  },
  fact: {
    fontSize: 18,
    marginVertical: 10,
    backgroundColor: 'white',
    width: "100%",
    height: 70,
    padding: 10,
    textAlign: 'center',
  },
  factHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    width: '100%',
    padding: 5,
  },
  image: {
    width: 500,
    height: 400,
    marginVertical: 10,
  },
  navbar: {
    position: 'fixed',
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navbarText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;