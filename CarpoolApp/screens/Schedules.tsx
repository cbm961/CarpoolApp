import React, {useState, type PropsWithChildren} from 'react';

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
  Pressable,
  Alert
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


const tab = createMaterialTopTabNavigator();

function UpcomingRides({navigation}: {navigation: any}) {

  return(
    <View style={styles.outerBody}>
      <ScrollView contentContainerStyle={styles.body}>

          <Text style={[styles.today, styles.redText]}>Today <Text style={styles.date}>Mon, Oct 28</Text></Text>
          
      
          <View style={styles.cards}>
            
           
                <View style={[styles.card, styles.shadowProp]}>  

                  <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}> 
                    <View>
                      <Text style={styles.bigText}>Home</Text>
                    </View>
                    <View>
                      <TouchableOpacity onPress={()=>navigation.navigate("RideDetails")}>
                        <Image source={require('../icons/arrow_right.png')} style={styles.rightArrow}/>
                      </TouchableOpacity>
                    </View>
                  </View> 

                    <View>
                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('../icons/user.png')} style={styles.personLogo}/>
                            <Text  style={styles.coordinates}> <Text style={styles.greyText}> Driver: </Text>You</Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>88,000LBP<Text style={styles.redText}>/rider</Text></Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('../icons/multiple-users-silhouette.png')} style={styles.smallLogo}/>
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
                            <Image source={require('../icons/departure_car.png')} style={styles.smallLogo}/>
                            <Text  style={[styles.coordinates, styles.bold]}> <Text style={styles.redText}> Departure From:</Text> AUB - Hamra </Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>6:00 PM-6:15 PM</Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('../icons/arrival_destination.png')} style={styles.smallLogo}/>
                            <Text  style={styles.coordinates}> <Text style={[styles.redText, styles.bold]}> Estimated Arrival: </Text> </Text>
                          </View>
                          <View>
                            <Text style={styles.bold}>7:00 PM</Text>
                          </View>
                        </View>

                    </View>           

                </View>  
          </View> 

          <Text style={[styles.day, styles.greyText]}>Tomorrow <Text style={styles.date}>Tue, Oct 29</Text></Text>
          
      
          <View style={styles.cards}>
            
                <View style={[styles.card, styles.shadowProp]}>  

                  <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}> 
                    <View>
                      <Text style={styles.bigText}>AUB - Main Gate</Text>
                    </View>
                    <View>
                      <TouchableOpacity onPress={()=>navigation.navigate("RideDetails")}>
                          <Image source={require('../icons/arrow_right.png')} style={styles.rightArrow}/>
                      </TouchableOpacity>
                    </View>
                  </View> 

                    <View>
                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('../icons/user.png')} style={styles.personLogo}/>
                            <Text  style={styles.coordinates}> <Text style={styles.greyText}> Driver: </Text>Youssef Charif</Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>120,000LBP<Text style={styles.redText}>/rider</Text></Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('../icons/multiple-users-silhouette.png')} style={styles.smallLogo}/>
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
                            <Image source={require('../icons/departure_car.png')} style={styles.smallLogo}/>
                            <Text  style={[styles.coordinates, styles.bold]}> <Text style={styles.redText}> Departure From:</Text> AUB - Hamra </Text>   
                          </View>
                          <View>
                            <Text style={styles.bold}>9:00 AM-9:30 AM</Text>
                          </View>
                        </View>

                        <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                          <View style={styles.parameters}>
                            <Image source={require('../icons/arrival_destination.png')} style={styles.smallLogo}/>
                            <Text  style={styles.coordinates}> <Text style={[styles.redText, styles.bold]}> Estimated Arrival: </Text> </Text>
                          </View>
                          <View>
                            <Text style={styles.bold}>10:00 AM</Text>
                          </View>
                        </View>

                    </View>           

                </View>  
          </View> 

      </ScrollView>
    </View>
  )
}
function PendingRides() {

  const [showBox, setShowBox] = useState(true);

  const showConfirmDialog = () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this beautiful box?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            setShowBox(false);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

  return(
    /*
    <View
    style={{
      flex:1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent:'center'
    }}
    >
      <Image source={require('../icons/girlstudying.png')} style={styles.roundPicture}/>
      <Text style={styles.titleText}>No Pending Rides</Text>
    </View> */ 
    <View style={styles.outerBody}>
       <ScrollView contentContainerStyle={styles.body}>

        <Text style={styles.biggerText}>Requests sent <Text style={styles.redText}>(1)</Text></Text>
        <View style={styles.cards}>

              <View style={[styles.card, styles.shadowProp]}>  

                <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}> 
                  <View style={styles.bigText}>
                    <Text style={styles.bigText}>AUB - Olayan School of Business</Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Image source={require('../icons/arrow_right.png')} style={styles.rightArrow}/>
                    </TouchableOpacity>
                  </View>
                </View> 

                  <View>
                      <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                        <View style={styles.parameters}>
                          <Image source={require('../icons/user.png')} style={styles.smallerLogo}/>
                          <Text  style={[styles.greyText, styles.coordinates, styles.smallerText]}> Clara Bou Mansour  <Text style={styles.lightBold}>- created on Jun 12, 22</Text></Text>  
                        </View>
                        <View>
                          <Text style={[styles.bold, {fontSize:13}]}>95,000LBP<Text style={styles.redText}>/rider</Text></Text>
                        </View>
                      </View>

                      <View style={[styles.horizontalFlex, styles.center, styles.marginBottom3]}>
                        <View style={styles.thinBlackLine}><Text></Text></View>
                      </View>

                      <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                        <View style={styles.parameters}>
                          <Image source={require('../icons/departure_car.png')} style={styles.smallLogo}/>
                          <Text  style={[styles.coordinates, styles.bold]}> <Text style={styles.redText}> Departure From:</Text> AUB - OSB </Text>   
                        </View>
                       <View>
                          <Text style={styles.bold}>2:00 PM-2:30 PM</Text>
                        </View>
                      </View>

                      <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                        <View style={styles.parameters}>
                          <Image source={require('../icons/arrival_destination.png')} style={styles.smallLogo}/>
                          <Text  style={styles.coordinates}> <Text style={[styles.redText, styles.bold]}> Estimated Arrival: </Text> </Text>
                        </View>
                        <View>
                          <Text style={styles.bold}>3:00 PM</Text>
                        </View>
                      </View>
                      
                        <View style={styles.cancelButton}>
                            <View>
                                <Text style={[styles.redText, styles.cancelButtonText]}>Cancel</Text>
                            </View>
                          
                        </View>
                      
                  </View>           

                </View>  
          </View>


          <Text style={styles.biggerText}>Requests received <Text style={styles.redText}>(2)</Text></Text>

        <View style={styles.cards}>

              <View style={[styles.card, styles.shadowProp]} >  

                <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}> 
                  <View style={styles.bigText}>
                    <Text style={styles.bigText}>AUB - Olayan School of Business</Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Image source={require('../icons/arrow_right.png')} style={styles.rightArrow}/>
                    </TouchableOpacity>
                  </View>
                </View> 

                  <View>
                      <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                        <View style={styles.parameters}>
                          <Image source={require('../icons/user.png')} style={styles.smallerLogo}/>
                          <Text  style={[styles.greyText, styles.coordinates, styles.smallerText]}> Clara Bou Mansour  <Text style={styles.lightBold}>- created on Jun 12, 22</Text></Text>  
                        </View>
                        <View>
                          <Text style={[styles.bold, {fontSize:13}]}>95,000LBP<Text style={styles.redText}>/rider</Text></Text>
                        </View>
                      </View>

                      <View style={[styles.horizontalFlex, styles.center, styles.marginBottom3]}>
                        <View style={styles.thinBlackLine}><Text></Text></View>
                      </View>

                      <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                        <View style={styles.parameters}>
                          <Image source={require('../icons/departure_car.png')} style={styles.smallLogo}/>
                          <Text  style={[styles.coordinates, styles.bold]}> <Text style={styles.redText}> Departure From:</Text> AUB - OSB </Text>   
                        </View>
                        <View>
                          <Text style={styles.bold}>2:00 PM-2:30 PM</Text>
                        </View>
                      </View>

                      <View style={[styles.horizontalFlex, styles.spaceBetween, styles.marginBottom3]}>
                        <View style={styles.parameters}>
                          <Image source={require('../icons/arrival_destination.png')} style={styles.smallLogo}/>
                          <Text  style={styles.coordinates}> <Text style={[styles.redText, styles.bold]}> Estimated Arrival: </Text> </Text>
                        </View>
                        <View>
                          <Text style={styles.bold}>3:00 PM</Text>
                        </View>
                      </View>

                      <Pressable
                         onPress={() => showConfirmDialog()}
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#860033' : 'white' }, styles.cancelButton, styles.center ]}>
                        {({ pressed }) => (
                          <View>
                              <Text style={[{ color: pressed ? 'white' : '#860033' }, styles.cancelButtonText]}>Cancel</Text>
                          </View>
                        )}
                      </Pressable>

                  </View>           

                </View>  
         </View>
        
      </ScrollView>

    </View>
  )
}


function MyTabs() {
  return (
    <tab.Navigator
      initialRouteName="Schedule"
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
          name="UpcomingRides"
          component={UpcomingRides}
          options={{tabBarLabel:'Upcoming Rides'}}
        />

        <tab.Screen
          name="PendingRides"
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

const Schedules = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <MyTabs/>
  );
};

const styles = StyleSheet.create({
  bigText: {
    flex: 0.9,
    color: 'black',
    fontSize: 17,
    fontWeight: '600',  

  },
  biggerText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: '3%',
    marginTop: '3%'
  },
  body: {
    padding: '2%',
    paddingBottom:'4%',
    flex: 1,
  },
  bold: {
    fontWeight:'600',
  },
  card: {  
    color: 'black',
    backgroundColor: 'white',   
    paddingVertical: '4%',  
    paddingHorizontal: '4%',   
    marginVertical: '2%',
    marginHorizontal:'2%',  
    borderRadius: 15,
    
  },  
  cards: {
    flexDirection: "column",
    justifyContent:'space-between' 
  },
  cancelButton: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth:1,
    borderColor: '#860033',
    paddingVertical: '1%',
  },
  cancelButtonText: {
    fontSize: 15,
    textAlign: 'center',
  },
  center: {
    justifyContent:'center',
  },
  coordinates: {
    fontSize: 12,
  },
  date: {
    fontSize: 11,
    fontWeight:'300',
  },
  day: {
    marginTop: '3%',
    marginLeft: '3%',
    fontSize: 15,
    fontWeight:'600',
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
  lightBold: {
    fontWeight:'600'
  },
  marginBottom3: {
    marginBottom:'3%'
  },
  parameters: {
    flexDirection: "row",
    height: 30,
    flex:0.7
  },
  personLogo: {
    width:25,
    height:25,
    marginTop: 3,
    marginRight: 5,
    resizeMode: 'contain',
  },
  outerBody: {
    flex:1,
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
  smallerLogo: {
    width:15,
    height:15,
    marginTop: 3,
    marginRight: 5,
    resizeMode: 'contain',
  },
  smallLogo: {
    width:25,
    height:25,
    marginTop: 3,
    marginRight: 5,
    resizeMode: 'contain',
},
smallerText: {
  fontSize: 10
},
spaceBetween: {
  justifyContent:'space-between',
},
thinBlackLine: {
  height: '5%',
  width: '100%',
  backgroundColor: 'lightgrey'
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

});

export default Schedules;
