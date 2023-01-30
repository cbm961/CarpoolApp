import React, {type PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TabBarIOS,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import { TabBar, TabBarIndicator } from 'react-native-tab-view';

const RideDetails = ({navigation}: {navigation: any}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <View>
        <Text>This is the details page</Text>
        <Button onPress={()=>navigation.navigate("Schedules")}
        title="Go back"></Button>
      </View>
      
  );
};

const styles = StyleSheet.create({
  bigText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',  

  },
  bold: {
    fontWeight:'600',
  },
  card: {  
    color: 'black',
    backgroundColor: 'white',   
    paddingVertical: 15,  
    paddingHorizontal: 15,   
    marginVertical: '3%',
    marginHorizontal:'3%',  
    borderRadius: 15,
  },  
  cards: {
    flexDirection: "column",
  },
  coordinates: {
    fontSize: 12,
  },
  day: {
    marginTop: '3%',
    marginLeft: '3%',
    fontSize: 15,
    fontWeight:'600',
  },  
  parameters: {
    flexDirection: "row",
    height: 30,
    flex:0.6
  },
  greyText: {
    color:'#888888',
  },
  heading: {  
    fontSize: 18,  
    fontWeight: '600',  
    marginBottom: 13,  
  },  
  highlight: {
    fontWeight: '700',
  },
  horizontalFlex: {
    flexDirection: "row",
  },
  marginBottom3: {
    marginBottom:'3%'
  },
  personLogo: {
    width:25,
    height:25,
    marginTop: 3,
    marginRight: 5,
    resizeMode: 'contain',
  },
  redText: {
    color: '#860033'
  },
  rightArrow: {
    width:20,
    height: 20,
    marginTop: 3,
    resizeMode: 'contain',
  },
  rightFlex:{
    justifyContent: 'flex-end'
  },
  roundPicture:{
    width:250,
    height: 250,
    resizeMode: 'contain',
    borderRadius: 1000,
    overflow: 'hidden' 
  },
  seatNumber: {
    backgroundColor: '#860033',
    borderRadius: 600,
    paddingRight:7,
    paddingLeft:7,
    paddingTop:4,
    paddingBottom:4,
  },
  seatNumberText: {
    color: 'white',
    fontSize:10
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

  shadowProp: {  
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7,
  },  

  smallLogo: {
    width:25,
    height:25,
    marginTop: 3,
    marginRight: 5,
    resizeMode: 'contain',
},
spaceBetween: {
  justifyContent:'space-between',
},

titleText: {
  color: '#860033',
  fontSize: 25,
  fontWeight: '700',
  textAlign: 'center',
  marginTop: 20,
},
today: {
  marginTop: '3%',
  marginLeft: '3%',
  fontSize: 22,
  fontWeight:'600',

},
date: {
  fontSize: 11,
  fontWeight:'300',
}

});

export default RideDetails;
