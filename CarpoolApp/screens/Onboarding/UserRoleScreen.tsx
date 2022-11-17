import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

const UserRoleScreen = () => {
  return (
    <View style={styles.mainPage}>
      <View style={styles.headerContent}>
        <Image
          source={require('../../assets/images/User-Role.jpg')}
          style={styles.imageLogo}
        />
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Do you want to sign up as a rider or a driver?
          </Text>
        </View>
        <Text style={styles.subtitleText}>You can switch your role later</Text>
      </View>
      <View style={styles.mainContent}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rider</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Driver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainPage: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  imageLogo: {
    width: '100%',
    height: 300,
  },

  title: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    color: '#860033',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },

  subtitleText: {
    color: '#860033',
    fontSize: 20,
    fontWeight: '500',
  },

  button: {
    backgroundColor: '#860033',
    width: '90%',
    marginBottom: 25,
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default UserRoleScreen;
