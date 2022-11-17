import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const EmailScreen = () => {
  const [username, setUsername] = React.useState('');
  return (
    <View style={styles.mainPage}>
      <View style={styles.headerContent}>
        <Image
          source={require('../../assets/images/AUB-logo-large.webp')}
          style={styles.imageLogo}
        />
        <View style={styles.title}>
          <Text style={styles.titleText}>Exclusive to AUB students</Text>
          <Text style={styles.subtitleText}>Enter your AUBSIS username</Text>
        </View>
      </View>
      <View style={styles.mainContent}>
        <TextInput
          style={styles.input}
          placeholder="ex: ymc06"
          placeholderTextColor={'gray'}
          onChangeText={setUsername}
          value={username}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
          <Image
            source={require('../../assets/images/Next-Icon.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  headerContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  mainContent: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red',
  },

  imageLogo: {
    flex: 2,
    width: '100%',
    height: 400,
  },

  nextIcon: {
    marginLeft: 10,
    width: 30,
    height: 30,
  },

  title: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
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

  input: {
    color: 'black',
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '70%',
    fontSize: 20,
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#860033',
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
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

export default EmailScreen;
