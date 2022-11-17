import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.mainPage}>
      <View style={styles.headerContent} />
      <View style={styles.mainContent}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Carpool Me</Text>
          <Image
            source={require('../assets/images/Steering-Wheel-Icon.png')}
            style={styles.wheelIcon}
          />
        </View>
        <Image
          source={require('../assets/images/AUB-logo.jpeg')}
          style={styles.imageLogo}
        />
      </View>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}> Powered by AUB students </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#860033',
  },

  headerContent: {},

  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  footerContent: {},

  imageLogo: {
    width: 170,
    height: 170,
  },

  wheelIcon: {
    width: 30,
    height: 30,
    marginTop: -19,
    marginLeft: 5,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
  },

  footerText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoadingScreen;
