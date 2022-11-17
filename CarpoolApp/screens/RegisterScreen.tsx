import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const RegisterScreen = () => {
    return (
      <View style={styles.mainPage}>
        <View style={styles.headerContent}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Let's Get Started!</Text>
            </View>
            <Image source={require('../assets/images/Carpool-Vector.jpg')} style={styles.imageLogo} />
        </View>
        <View style={styles.mainContent}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    )

};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  headerContent: {
    flex: 1.5,
    width: '100%',
    justifyContent: 'center'
  },

  mainContent: {
    flex: 1.2,
    alignItems: 'center',
    width: '100%',
  },

  imageLogo: {
    width: '100%',
    height: 270,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    color: '#860033',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#860033',
    width: 230,
    marginBottom: 30,
    justifyContent: 'center',
    borderRadius: 30,
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
  }
});

export default RegisterScreen;
