import React, {Component} from 'react'
import {ScrollableTabView , ScrollableTabBar,DefaultTabBar} from '@valdio/react-native-scrollable-tabview'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,TextInput,Alert,Dimensions,Animated,
  TouchableOpacity,LayoutAnimation,KeyboardAvoidingView,
  View,Button,ImageBackground,FlatList
} from 'react-native';
import Constants from 'expo-constants';
import DetailsScreen from '../screens/DetailsScreen';
import NewContactScreen from '../screens/NewContactScreen';
import NewOpportunityScreen from '../screens/NewOpportunityScreen';
import RelationShipScreen from '../screens/RelationShipScreen';
import SliderScreen from '../screens/SliderScreen';



export default class ContactDetails extends Component {



  static navigationOptions =  ({ navigation }) => {
    const { params = {} } = navigation.state
       return {
         header:null,
                }
           }



           onClick=(Header)=>{
             this.props.navigation.navigate('Test',{
               scroll:Header
             })
           }

   render() {


     const collapsableComponent = (
     <View style={{height: 150, backgroundColor: '#206399', width: '100%'}}>
     <Text>name</Text>
     </View>

   )
      return (
<View style={{flex:1}}>
         <View style={{height:Constants.statusBarHeight,backgroundColor:'#2b79b0'}}></View>





        <ScrollableTabView

        tabBarBackgroundColor={'#2a6185'}
        tabBarActiveTextColor={'white'}
        tabBarInactiveTextColor={'#000000'}
        tabBarTextStyle={{fontSize: 12}}
        renderTabBar={() => <DefaultTabBar />}
        style={{height:30,marginTop:0}}>
            <ScrollView tabLabel="TimeLine">
                <View>
                    <Text>One</Text>
                    <DetailsScreen/>
                </View>
            </ScrollView>
            <ScrollView tabLabel="Activity" >
                <View>
                    <Text>Two</Text>
                    <NewContactScreen/>
                </View>
            </ScrollView>
            <ScrollView tabLabel="Email">
                <View>
                    <Text>Two</Text>
                    <NewOpportunityScreen/>
                </View>
            </ScrollView>
            <ScrollView tabLabel="Call/SMS">
                <View>
                    <Text>Two</Text>
                    <RelationShipScreen/>
                </View>
            </ScrollView>
            <ScrollView tabLabel="Task" >
                <View>
                    <Text>Two</Text>
                    <SliderScreen/>
                </View>
            </ScrollView>
            <ScrollView tabLabel="Schedule" >
                <View>
                    <Text>Two</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="Schedule" >
                <View>
                  
                </View>
            </ScrollView>

      </ScrollableTabView>

      </View>
    );
  }
}
