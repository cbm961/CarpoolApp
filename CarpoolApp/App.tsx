/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   ImageBackground,
//   Image,
//   View,
//   TouchableWithoutFeedback,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import LoadingScreen from './screens/LoadingScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import EmailScreen from './screens/Onboarding/EmailScreen';
import UserInformationScreen from './screens/Onboarding/UserInformationScreen';
import UserRoleScreen from './screens/Onboarding/UserRoleScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackParamList from './types';

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoadingScreen} />
        <Stack.Screen name="Registration" component={UserInformationScreen} />
        <Stack.Screen name="Role" component={UserRoleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
