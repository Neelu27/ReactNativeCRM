import * as WebBrowser from 'expo-web-browser';
import React,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,TextInput,
  TouchableOpacity,
  View,Button,ImageBackground,FlatList
} from 'react-native';
import { Card } from 'react-native-elements';
import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-check-box';
import { Ionicons } from '@expo/vector-icons';

export default class DetailsScreen extends Component {
  constructor(props){
    super(props);
    this.state={
        FlatListItems:[
          {name:'Santan',company:'Sai Techonology',img:require('../assets/images/img_avatar_card.png'),icon1:'true',deal:'Cool deal'},
          {name:'Sai',company:'Sai Techonology',img:require('../assets/images/img_avatar_card.png'),icon1:'true',deal:'O C R deal'},
          {name:'Shandhya',company:'SaiTechonology',email:'shan@gmail.com',img:require('../assets/images/img_avatar_card.png'),icon1:'true',deal:'Cool deal'},
          {name:'Sital',company:'Sai Techonology',img:require('../assets/images/img_avatar_card.png'),icon1:'true',deal:'Cool deal'},
        {name:'Satyam',company:'Sai  Techonology',img:require('../assets/images/img_avatar_card.png'),icon1:'true',deal:'Cool deal'},],

    }
  }
  clickHandler=()=>{
    this.props.navigation.navigate('NewOpportunityScreen',{
      color:'#efa834'
    })
  }
  render(){
    return(
      <View style={{ flex: 1}}>
        <View style={{height:Constants.statusBarHeight,backgroundColor:'#2b79b0'}}></View>
         <FlatList
            data={this.state.FlatListItems}
            extraData={this.state}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index})=>(
              <Card containerStyle={{flexDirection:'column',margin:20,padding:0,borderWidth:0.2,borderRadius:10,backgroundColor:'#fafdff'}}>
                  <View style={{flexDirection:'column',paddingLeft:30,paddingTop:15,paddingRight:25,}}>
                      <Text style={{fontSize:20}}>{item.deal}</Text>
                      <View style={{flexDirection:'row'}}>
                            <Ionicons name="ios-business" size={18} style={{fontSize:16,paddingTop:12,paddingRight:4,color:'#524e4e'}}/>
                            <Text style={{fontSize:16,paddingTop:10,color:'#747474'}}>{item.company}</Text>
                      </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',paddingTop:10,paddingBottom:20}}>
                        <View style={{height:50,width:50,justifyContent:'flex-start',alignItems:'flex-start',}}>
                            <Image source={item.img} style={{height:'100%',width:'100%',borderRadius:50}}/>
                        </View>
                        <Text style={{fontSize:16,paddingLeft:10,paddingTop:15,color:'#747474'}}>{item.name}</Text>
                    </View>
                  </View>
              </Card>
            )}
            />
            <View style={{paddingBottom: 0,paddingRight: 90}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.clickHandler}
              style={styles.TouchableOpacityStyle}>
              <Ionicons name="md-add" size={32} color="#fff"/>
            </TouchableOpacity>
          </View>
        </View>
      );
  }
}
const styles = StyleSheet.create({

   lineStyle:{
    borderWidth: 0.3,
    borderColor:'#b0b0b0',
    paddingLeft:120,

},
TouchableOpacityStyle: {
   position: 'absolute',
   width: 45,
   height: 45,
   alignItems: 'center',
   justifyContent: 'center',
   right: 30,
   bottom: 30,
   backgroundColor: '#2b79b0',
   zIndex: 1,
   borderRadius:25,
 },
});
