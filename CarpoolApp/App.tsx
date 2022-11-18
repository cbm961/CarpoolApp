import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/BottomNavBar';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return(
      <NavigationContainer>
          <Tabs/>
      </NavigationContainer>
  )
}

export default App;
