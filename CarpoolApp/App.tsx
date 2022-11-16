/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
    return (
      <View style={styles.mainPage}>
        <View style={styles.headerContent}></View>
        <View style={styles.mainContent}>
            <Text style={styles.title}>Carpool Me</Text>
            <Image source={require('./assets/images/AUB-logo.jpeg')} style={styles.imageLogo} />
        </View>
        <View style={styles.footerContent}>
            <Text style={styles.footerText}> Powered by AUB students </Text>
        </View>
      </View>
    )

};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#860033',
  },
  headerContent: {

  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  footerContent: {
  },
  imageLogo: {
    width: 170,
    height: 170,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  }
});

export default App;
