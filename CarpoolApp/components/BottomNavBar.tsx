import 'react-native-gesture-handler';

import * as React from 'react';

import {StyleSheet, Text, View, Button, TouchableOpacity, Touchable, GestureResponderEvent} from 'react-native';  
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import FindScreen from '../pages/FindScreen';
import ProfileScreen from '../pages/ProfileScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const CostumTabBarButton = (props: {children: React.ReactNode, onPress?: (event: GestureResponderEvent) => void}) => {
  const {children, onPress} = props;
  return (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#860033',
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3
    }}>
      {children}
    </View>
  </TouchableOpacity>
)};


const Tabs = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarShowLabel: false
      }}
      >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top:'10'}}>
            <AntDesign 
              name="home" 
              size={24} 
              color={focused ? '#860033' : '#748c94'}/>
          </View>
        )
      }}     
      />

    <Tab.Screen name="Find" component={FindScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top:'10'}}>
            <AntDesign 
              name="find" 
              size={24} 
              color={focused ? 'white' : 'white'}/>
          </View>
        ),
        tabBarButton: (props) => (
          <CostumTabBarButton {...props}/>        
        )
      }}/>
      
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top:'10'}}>
            <AntDesign 
              name="profile" 
              size={24} 
              color={focused ? '#860033' : '#748c94'}/>
          </View>
        )
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs;