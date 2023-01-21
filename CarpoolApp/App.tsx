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
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, TabBarIndicator } from 'react-native-tab-view';


const tab = createMaterialTopTabNavigator();

function UpcomingRides() {
  return(
    <View>
      <ScrollView>

          <Text style={[styles.today, styles.redText]}>Today <Text style={styles.date}>Mon, Oct 28</Text></Text>
          
      
          <View style={styles.cards}>
            
            <TouchableOpacity >
                <View style={[styles.card, styles.shadowProp]}>  

                  <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}> 
                    <View>
                      <Text style={styles.bigText}>Home</Text>
                    </View>
                    <View>
                      <Image source={require('./icons/arrow_right.png')} style={styles.rightArrow}/>
                    </View>
                  </View> 

                    <View>
                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/person_icon.png')} style={styles.personLogo}/>
                            <Text  style={styles.coordinates}> <Text style={styles.greyText}> Driver: </Text>You</Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>88,000LBP<Text style={styles.redText}>/rider</Text></Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/multiple-users-silhouette.png')} style={styles.smallLogo}/>
                            <Text  style={styles.coordinates}> <Text style={styles.greyText}> Riders: </Text>Marilyn Chahine, Youssef, 2 more...</Text>   
                          </View>
                          <View>
                            <View style={styles.seatNumber}>
                              <Text style={styles.seatNumberText}>4/4 Seats</Text>
                            </View>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/departure_car.png')} style={styles.smallLogo}/>
                            <Text  style={[styles.coordinates, styles.bold]}> <Text style={styles.redText}> Departure From:</Text> AUB - Hamra </Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>6:00 PM-6:15 PM</Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/arrival_destination.png')} style={styles.smallLogo}/>
                            <Text  style={styles.coordinates}> <Text style={[styles.redText, styles.bold]}> Estimated Arrival: </Text> </Text>
                          </View>
                          <View>
                            <Text style={styles.bold}>7:00 PM</Text>
                          </View>
                        </View>

                    </View>           

                </View>  

              </TouchableOpacity>
          </View> 

          <Text style={[styles.day, styles.greyText]}>Tomorrow <Text style={styles.date}>Tue, Oct 29</Text></Text>
          
      
          <View style={styles.cards}>
            
            <TouchableOpacity >
                <View style={[styles.card, styles.shadowProp]}>  

                  <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}> 
                    <View>
                      <Text style={styles.bigText}>AUB - Main Gate</Text>
                    </View>
                    <View>
                      <Image source={require('./icons/arrow_right.png')} style={styles.rightArrow}/>
                    </View>
                  </View> 

                    <View>
                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/person_icon.png')} style={styles.personLogo}/>
                            <Text  style={styles.coordinates}> <Text style={styles.greyText}> Driver: </Text>Youssef Charif</Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>120,000LBP<Text style={styles.redText}>/rider</Text></Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/multiple-users-silhouette.png')} style={styles.smallLogo}/>
                            <Text  style={styles.coordinates}> <Text style={styles.greyText}> Riders: </Text>You, Lea Khairallah</Text>   
                          </View>
                          <View>
                            <View style={styles.seatNumber}>
                              <Text style={styles.seatNumberText}>2/3 Seats</Text>
                            </View>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/departure_car.png')} style={styles.smallLogo}/>
                            <Text  style={[styles.coordinates, styles.bold]}> <Text style={styles.redText}> Departure From:</Text> AUB - Hamra </Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>9:00 AM-9:30 AM</Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/arrival_destination.png')} style={styles.smallLogo}/>
                            <Text  style={styles.coordinates}> <Text style={[styles.redText, styles.bold]}> Estimated Arrival: </Text> </Text>
                          </View>
                          <View>
                            <Text style={styles.bold}>10:00 AM</Text>
                          </View>
                        </View>

                    </View>           

                </View>  

              </TouchableOpacity>

              <TouchableOpacity >
                <View style={[styles.card, styles.shadowProp]}>  

                  <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}> 
                    <View>
                      <Text style={styles.bigText}>AUB - Main Gate</Text>
                    </View>
                    <View>
                      <Image source={require('./icons/arrow_right.png')} style={styles.rightArrow}/>
                    </View>
                  </View> 

                    <View>
                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/person_icon.png')} style={styles.personLogo}/>
                            <Text  style={styles.coordinates}> <Text style={styles.greyText}> Driver: </Text>Anthony Sleilaty</Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>95,000LBP<Text style={styles.redText}>/rider</Text></Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/multiple-users-silhouette.png')} style={styles.smallLogo}/>
                            <Text  style={styles.coordinates}> <Text style={styles.greyText}> Riders: </Text>You, Marilyn Chahine</Text>   
                          </View>
                          <View>
                            <View style={styles.seatNumber}>
                              <Text style={styles.seatNumberText}>2/4 Seats</Text>
                            </View>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/departure_car.png')} style={styles.smallLogo}/>
                            <Text  style={[styles.coordinates, styles.bold]}> <Text style={styles.redText}> Departure From:</Text> AUB - OSB </Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>2:00 PM-2:30 PM</Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('./icons/arrival_destination.png')} style={styles.smallLogo}/>
                            <Text  style={styles.coordinates}> <Text style={[styles.redText, styles.bold]}> Estimated Arrival: </Text> </Text>
                          </View>
                          <View>
                            <Text style={styles.bold}>3:00 PM</Text>
                          </View>
                        </View>

                    </View>           

                </View>  

              </TouchableOpacity>

          </View> 

      </ScrollView>
    </View>
  )
}
function PendingRides() {
  return(
    <View
    style={{
      flex:1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent:'center'
    }}
    >
      <Image source={require('./icons/girlstudying.png')} style={styles.roundPicture}/>
      <Text style={styles.titleText}>No Pending Rides</Text>
    </View>
  )
}

function MyTabs() {
  return (
    <tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: 'white',
        paddingTop: '2%',
        paddingBottom: '2%',
        

      },
      
        tabBarLabelStyle: {
          fontWeight:'700',
          fontSize:17,
          textTransform: "none",
        },
        
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#e1d6da',
        tabBarIndicatorStyle:{
          backgroundColor: '#860033',
          height: 6
        } 
        
      }}
    >
  
        <tab.Screen
          name="Home"
          component={UpcomingRides}
          options={{tabBarLabel:'Upcoming Rides'}}
        />

        <tab.Screen
          name="Not Home"
          component={PendingRides}
          options={{tabBarLabel:'Pending (3)'}}
        />

    </tab.Navigator>

  )
}


const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const schedules = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
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
    width:13,
    height:13,
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

export default schedules;
