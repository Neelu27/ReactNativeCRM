import * as WebBrowser from 'expo-web-browser';
import React,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,TextInput,
  TouchableOpacity,TouchableWithoutFeedback,
  View,Button,ImageBackground,FlatList
} from 'react-native';
import { Card } from 'react-native-elements';

import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-check-box';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
        FlatListItems:[
          {name:'Abhi',company:'Sai Techonology',phoneno:'1478658945',email:'abhi@gmail.com',img:require('../assets/images/img_avatar_card.png'),icon1:'true',icon2:'true',icon3:'true',icon4:'true'},
          {name:'Sai',company:'Sai Techonology',phoneno:'1478658945',email:'sai@gmail.com',img:require('../assets/images/img_avatar_card.png'),icon1:'true',icon2:'true',icon3:'true',icon4:'true'},
          {name:'Shandhya',company:'SaiTechonology',phoneno:'14786589',email:'shan@gmail.com',img:require('../assets/images/img_avatar_card.png'),icon1:'true',icon2:'true',icon3:'true',icon4:'true'},
          {name:'Sital',company:'Sai Techonology',phoneno:'1478658945',email:'sital@gmail.com',img:require('../assets/images/img_avatar_card.png'),icon1:'true',icon2:'true',icon3:'true',icon4:'true'},
        {name:'Satyam',company:'Sai  Techonology',phoneno:'1478658945',email:'saty@gmail.com',img:require('../assets/images/img_avatar_card.png'),icon1:'true',icon2:'true',icon3:'true',icon4:'true'},],

    }
  }
  clickHandler=()=>{
    this.props.navigation.navigate('NewContactScreen',{
      color:'#efa834'
    })
  }
  onClick=(item)=>{
    this.props.navigation.navigate('Test',{
      user:item
    })
  }
  render(){
    return(
      <View style={{ flex: 1}}>
        <View style={{height:Constants.statusBarHeight,backgroundColor:'#2b79b0'}}></View>
        <FlatList
            data={this.state.FlatListItems}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index})=>(
              <TouchableWithoutFeedback  onPress={()=>{this.onClick(item)}}>
              <Card containerStyle={{flexDirection:'column',margin:20,padding:0,borderWidth:0.2,backgroundColor:'#fafdff'}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',}}>
                        <View style={{height:100,width:100,justifyContent:'flex-start',alignItems:'flex-start',}}><Image source={item.img} style={{height:'100%',width:'100%'}}/>
                        </View>
                        <View style={{flexDirection:'column',paddingLeft:20,paddingTop:15,paddingRight:25,}}><Text style={{fontSize:20}}>{item.name}</Text><Text style={{fontSize:16,paddingTop:35,color:'#747474'}}>{item.company}</Text>
                       </View>
                  </View>
                  <View style={[styles.lineStyle,{marginLeft:100}]}></View>
                  <View style={{flexDirection:'row',paddingTop:15,paddingLeft:20,}}>
                        <View style={{flexDirection:'column',}}>
                          <Ionicons name="md-phone-portrait" size={16}  />
                          <Ionicons name="md-mail" size={16} style={{paddingTop:7}}  />
                       </View>
                       <View style={{flexDirection:'column',paddingLeft:20,paddingBottom:14}}>
                         <Text style={{color:'#747474'}} >{item.phoneno}</Text><Text style={{paddingTop:4,color:'#747474'}} >{item.email}</Text>
                       </View>

                  </View>
                </Card>
                </TouchableWithoutFeedback>
              )}
            />
            <View style={{paddingBottom: 0,paddingRight: 90}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.clickHandler}
              style={styles.TouchableOpacityStyle}>
              <Ionicons name="md-add" size={32} color="#fff"  />
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
