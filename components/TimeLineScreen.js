import * as WebBrowser from 'expo-web-browser';
import React,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,Animated,
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
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
        FlatListItems:[
          {name:'Abhi',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'20sec',timestamp:'2 days ago',},
          {name:'Sai',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'28sec',timestamp:'21 days ago',},
          {name:'Shandhya',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'1 mins',timestamp:'20 days ago',},
          {name:'Sital',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'2 hr',timestamp:'40 days ago',},
        {name:'Satyam',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'just now',timestamp:'2 days ago',},
        {name:'Abhi',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'2 sec',timestamp:'4 days ago',},
        {name:'Sai',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'1 min',timestamp:'2 days ago',},
        {name:'Shandhya',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'3     hr',timestamp:'20 days ago',},
        {name:'Sital',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'4  hr',timestamp:'4 days ago',},
      {name:'Satyam',img:require('../assets/images/img_avatar_card.png'),icon1:'true',duration:'20 hr',timestamp:'60 days ago',},],
isHorizontal:true,
text5:'the note',
scrollX: new Animated.Value(0),
    }
  }

  render(){
    return(
      <View style={{ flex: 1}}>

        <FlatList
            data={this.state.FlatListItems}
            extraData={this.state}
            nestedScrollEnabled={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index})=>(
              <TouchableWithoutFeedback >
              <Card containerStyle={{flexDirection:'column',marginTop:20,marginLeft:0,marginRight:0,padding:0,borderWidth:0.2,backgroundColor:'#fafdff'}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'space-between',}}>
                        <View style={{height:40,width:40,justifyContent:'flex-start',alignItems:'flex-start',position:'absolute',left:width*0.025,top:width*0.015,bottom:width*0.015,borderWidth:0}}><Image source={item.img} style={{height:'100%',width:'100%',borderRadius:50}}/>
                        </View>
                        <View style={{height:40,width:width*0.8,flexDirection:'row',position:'absolute',left:width*0.14,top:width*0.015,bottom:width*0.015,justifyContent:'space-between',alignItems:'center',borderWidth:0}}>
                          <View style={{borderWidth:0,alignContent:'flex-start'}}><Text style={{fontSize:17}}>{item.name}</Text></View>


                      <View style={{borderWidth:0,alignContent:'center'}}><Text style={{fontSize:16,color:'#747474',}}>{item.duration}</Text></View>
                        <View style={{borderWidth:0,alignContent:'flex-end',flexDirection:'row'}}>
                          <Ionicons name='md-time' size={17} style={{padding:2,paddingRight:4}}/>
                          <Text style={{fontSize:16,color:'#747474'}}>{item.timestamp}</Text></View>
                       </View>
                  </View>
                  <View style={[styles.lineStyle,{marginTop:width*0.1225}]}></View>
                  <View>
                    <AutoGrowingTextInput style={{height:25,padding:4,paddingTop:6,paddingLeft:15,paddingRight:8,   fontSize:16,backgroundColor:'#ffffff',borderBottomWidth:0,justifyContent:'flex-start',textAlign:'auto',textAlignVertical:'top'}} minHeight={150}
                      editable={false}
                      maxHeight={400}

                      onChangeText={(text5) => this.setState({text5})}
                     value={this.state.text5}/>
                  </View>
                  <View style={[styles.lineStyle]}>

                </View>


                <ScrollView horizontal={this.state.isHorizontal} style={{height:100,flexDirection:'column',paddingTop:0,paddingLeft:20,paddingBottom:10,marginBottom:10,}}>
                  <Card containerStyle={{flexDirection:'column',height:80,width:width*0.5,margin:10,padding:0,paddingTop:10,borderWidth:1,borderBottomWidth:2,backgroundColor:'#ffffff',shadowColor: '#000',
                  shadowOffset: { width: 4, height: 10 },shadowOpacity: 4,shadowRadius: 0,elevation: 10,}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'space-between',}}>
                            <View style={{height:50,width:50,justifyContent:'flex-start',alignItems:'flex-start',position:'absolute',left:width*0.025,top:width*0.015,bottom:width*0.015,borderWidth:0}}>
                            <Image source={require('../assets/images/img_avatar_card.png')} style={{height:'100%',width:'100%',borderRadius:50}}/>
                            </View>
                            <View style={{height:40,flexDirection:'column',position:'absolute',left:width*0.18,top:width*0.015,bottom:width*0.015,justifyContent:'space-between',alignItems:'center',borderWidth:0}}>
                                 <View style={{borderWidth:0,alignContent:'flex-start'}}><Text style={{fontSize:16}}>Abhi</Text>
                                 </View>
                                 <View style={{borderWidth:0,alignContent:'center'}}><Text style={{fontSize:16,color:'#747474',}}>ID:1</Text>
                                 </View>
                           </View>
                           </View>
                    </Card>
                    <Card containerStyle={{flexDirection:'column',height:80,width:width*0.5,margin:10,padding:0,paddingTop:10,borderWidth:1,borderBottomWidth:2,backgroundColor:'#ffffff',shadowColor: '#000',
                    shadowOffset: { width: 4, height: 10 },shadowOpacity: 4,shadowRadius: 0,elevation: 10,}}>
                          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'space-between',}}>
                              <View style={{height:50,width:50,justifyContent:'flex-start',alignItems:'flex-start',position:'absolute',left:width*0.025,top:width*0.015,bottom:width*0.015,borderWidth:0}}>
                              <Image source={require('../assets/images/img_avatar_card.png')} style={{height:'100%',width:'100%',borderRadius:50}}/>
                              </View>
                              <View style={{height:40,flexDirection:'column',position:'absolute',left:width*0.18,top:width*0.015,bottom:width*0.015,justifyContent:'space-between',alignItems:'center',borderWidth:0}}>
                                   <View style={{borderWidth:0,alignContent:'flex-start'}}><Text style={{fontSize:16}}>Abhi</Text>
                                   </View>
                                   <View style={{borderWidth:0,alignContent:'center'}}><Text style={{fontSize:16,color:'#747474',}}>ID:1</Text>
                                   </View>
                             </View>
                             </View>
                      </Card>
                      <Card containerStyle={{flexDirection:'column',height:80,width:width*0.5,margin:10,padding:0,paddingTop:10,borderWidth:1,borderBottomWidth:2,backgroundColor:'#ffffff',shadowColor: '#000',
                      shadowOffset: { width: 4, height: 10 },shadowOpacity: 4,shadowRadius: 0,elevation: 10,}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'space-between',}}>
                                <View style={{height:50,width:50,justifyContent:'flex-start',alignItems:'flex-start',position:'absolute',left:width*0.025,top:width*0.015,bottom:width*0.015,borderWidth:0}}>
                                <Image source={require('../assets/images/img_avatar_card.png')} style={{height:'100%',width:'100%',borderRadius:50}}/>
                                </View>
                                <View style={{height:40,flexDirection:'column',position:'absolute',left:width*0.18,top:width*0.015,bottom:width*0.015,justifyContent:'space-between',alignItems:'center',borderWidth:0}}>
                                     <View style={{borderWidth:0,alignContent:'flex-start'}}><Text style={{fontSize:16}}>Abhi</Text>
                                     </View>
                                     <View style={{borderWidth:0,alignContent:'center'}}><Text style={{fontSize:16,color:'#747474',}}>ID:1</Text>
                                     </View>
                               </View>
                               </View>
                        </Card>
                        <Card containerStyle={{flexDirection:'column',height:80,width:width*0.5,margin:10,padding:0,paddingTop:10,borderWidth:1,borderBottomWidth:2,backgroundColor:'#ffffff',shadowColor: '#000',
                        shadowOffset: { width: 4, height: 10 },shadowOpacity: 4,shadowRadius: 0,elevation: 10,}}>
                              <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'space-between',}}>
                                  <View style={{height:50,width:50,justifyContent:'flex-start',alignItems:'flex-start',position:'absolute',left:width*0.025,top:width*0.015,bottom:width*0.015,borderWidth:0}}>
                                  <Image source={require('../assets/images/img_avatar_card.png')} style={{height:'100%',width:'100%',borderRadius:50}}/>
                                  </View>
                                  <View style={{height:40,flexDirection:'column',position:'absolute',left:width*0.18,top:width*0.015,bottom:width*0.015,justifyContent:'space-between',alignItems:'center',borderWidth:0}}>
                                       <View style={{borderWidth:0,alignContent:'flex-start'}}><Text style={{fontSize:16}}>Abhi</Text>
                                       </View>
                                       <View style={{borderWidth:0,alignContent:'center'}}><Text style={{fontSize:16,color:'#747474',}}>ID:1</Text>
                                       </View>
                                 </View>
                                 </View>
                          </Card>
                </ScrollView>

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
    borderWidth: 0.15,
    borderColor:'#b0b0b0',
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
