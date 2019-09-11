import * as WebBrowser from 'expo-web-browser';
import React,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,TextInput,Dimensions,
  TouchableOpacity,TouchableWithoutFeedback,
  View,Button,ImageBackground,FlatList
} from 'react-native';
import { Card } from 'react-native-elements';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-check-box';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-carousel';
const { width } = Dimensions.get('window');
export default class NestedCard extends Component {
  constructor(props){
    super(props);
    this.state={
        FlatListItems:[
          {name:'Abhi',img:require('../assets/images/img_avatar_card.png'),id:1},
          {name:'Sai',img:require('../assets/images/img_avatar_card.png'),id:2},
          {name:'Shandhya',img:require('../assets/images/img_avatar_card.png'),id:3},
          {name:'Sital',img:require('../assets/images/img_avatar_card.png'),id:4},
        {name:'Satyam',img:require('../assets/images/img_avatar_card.png'),id:5},
        ],
isHorizontal:true,
    }
  }
  render(){
    return(
      <View style={{ flex: 1,marginLeft:70}}>

        <FlatList
            data={this.state.FlatListItems}
            extraData={this.state}
            horizontal={this.state.isHorizontal}
            showsHorizontalScrollIndicator={false}


            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index})=>(
              <TouchableWithoutFeedback  >
              <Card containerStyle={{flexDirection:'column',height:80,width:width*0.5,margin:10,padding:0,paddingTop:10,borderWidth:1,borderBottomWidth:2,backgroundColor:'#ffffff',shadowColor: '#000',
              shadowOffset: { width: 4, height: 10 },shadowOpacity: 4,shadowRadius: 0,elevation: 10,}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'space-between',}}>
                        <View style={{height:50,width:50,justifyContent:'flex-start',alignItems:'flex-start',position:'absolute',left:width*0.025,top:width*0.015,bottom:width*0.015,borderWidth:0}}>
                        <Image source={item.img} style={{height:'100%',width:'100%',borderRadius:50}}/>
                        </View>
                        <View style={{height:40,flexDirection:'column',position:'absolute',left:width*0.18,top:width*0.015,bottom:width*0.015,justifyContent:'space-between',alignItems:'center',borderWidth:0}}>
                             <View style={{borderWidth:0,alignContent:'flex-start'}}><Text style={{fontSize:20}}>{item.name}</Text>
                             </View>
                             <View style={{borderWidth:0,alignContent:'center'}}><Text style={{fontSize:16,color:'#747474',}}>ID: {item.id}</Text>
                             </View>
                       </View>
                       </View>
                </Card>
                </TouchableWithoutFeedback>
              )}
            />

        </View>
      );
  }
}
