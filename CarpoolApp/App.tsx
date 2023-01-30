import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Schedules from './screens/Schedules';
import RideDetails from './screens/RideDetails';

const Stack = createNativeStackNavigator();

const app = () => {
  return ( 
    <NavigationContainer>{
      <Stack.Navigator  
       screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Schedules"
          component={Schedules}
          options={{title: 'schedules'}}
        />
          <Stack.Screen
          name="RideDetails"
          component={RideDetails}
          options={{title: 'Ride Details'}}
        />
      </Stack.Navigator>}
    </NavigationContainer> 
  );
};
   
export default app;