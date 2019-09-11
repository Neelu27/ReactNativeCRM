import React,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,TextInput,Alert,Dimensions,
  TouchableOpacity,LayoutAnimation,KeyboardAvoidingView,
  View,Button,ImageBackground,FlatList
} from 'react-native';
import { Card } from 'react-native-elements';
import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker';
import { Ionicons } from '@expo/vector-icons';

import RichTextScreen from '../screens/RichTextScreen';
import RangeSlider from 'react-native-range-slider';
import SliderScreen from '../screens/SliderScreen';
import SearchOption from '../screens/SearchOption';


const IS_IOS = Platform.OS === 'ios';
const { width } = Dimensions.get('window');
export default class NewContactScreen extends Component {
  constructor () {
    super();
    this.state ={
        SwitchOnValueHolder :  true,
        imgView:true,
        show:true,

      }
    }

static navigationOptions =  ({ navigation }) => {
  const { params = {} } = navigation.state
     return {
       title:'Create a New Opportunity',
           headerStyle: {
                 backgroundColor:'#2b79b0',
                 height: 45
               },
            headerTintColor:'#fff',
            headerTitleStyle: {
                  alignSelf:'center',
                  marginLeft:5,
                }
              }
         }

  render(){
    return(
      <KeyboardAvoidingView
      behavior="padding"
      enabled
      keyboardVerticalOffset={IS_IOS ? 0 : 0}
      style={styles.root}>

      <View style={styles.container}>
             <ScrollView>
               <View style={{flexDirection:'column',padding:8,marginHorizontal:10,marginTop:20}}>
                              <View style={{flexDirection:'column',}}>
                                    <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Name</Text>
                                    <TextInput style={{height: 35,paddingLeft:6,paddingTop:4,paddingBottom:4,  borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                                      onChangeText={(text) => this.setState({text})}
                                      value={this.state.text} >
                                    </TextInput>
                              </View>
                              <View style={{flexDirection:'column',}}>
                                    <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Company</Text>
                                    <TextInput style={{height: 35,paddingLeft:6,paddingTop:4,paddingBottom:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                                      onChangeText={(text2) => this.setState({text2})}
                                      value={this.state.text2} >
                                    </TextInput>
                                </View>

                            <View style={{flexDirection:'column',}}>
                                      <Text style={{paddingTop:6,paddingBottom:2, fontSize:16}}>Stake holders at customer side</Text>
                                        <View style={{flexDirection:'row'}}>
                                              <SearchOption/>
                                              <TouchableOpacity style={{height: 35,width:width*0.142,paddingLeft:0,padding:4 ,  borderWidth: 0.2,fontSize:16,marginRight:10,backgroundColor:'#2b79b0',marginLeft:width*0.75}}><Text style={{paddingLeft:8,fontSize:16,color:'#ffffff'}} >Add+</Text></TouchableOpacity>
                                        </View>
                            </View>

                            <View style={{flexDirection:'column',}}>
                                    <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Internal stake holders</Text>
                                    <View style={{flexDirection:'row'}}>
                                          <SearchOption/>
                                          <TouchableOpacity style={{height: 35,width:width*0.142,paddingLeft:0,padding:4 ,  borderWidth: 0.2,fontSize:16,marginRight:10,backgroundColor:'#2b79b0',marginLeft:width*0.75}}><Text style={{paddingLeft:8,fontSize:16,color:'#ffffff'}} >Add+</Text></TouchableOpacity>
                                    </View>
                            </View>

                          <View style={{flexDirection:'column',}}>
                                <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Initial state</Text>
                                <TextInput style={{height: 35,paddingLeft:6,padding:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                                  onChangeText={(text2) => this.setState({text2})}
                                  value={this.state.text2} >
                                </TextInput>
                          </View>

                          <SliderScreen/>


                           <View style={{flexDirection:'column'}}>
                               <Text>Client requiments (if identified)</Text>
                                <View style={{marginTop:-90,marginLeft:-10,marginRight:-10}}>
                                <RichTextScreen/></View>
                          </View>
              </View>
           </ScrollView>
           <View style={{flexDirection:'row',marginLeft:18,marginRight:18,marginTop:5,marginBottom:10,justifyContent:'space-between',}}>
               <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}><Button title={'Reset'}/></View>
               <View style={{justifyContent:'flex-start',alignItems:'flex-end',alignSelf:'flex-end'}}><Button title={'Save'}/>
               </View>
           </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles=StyleSheet.create({

  container: {
        flex:1,
        flexDirection:'column',
        margin:3,
        backgroundColor: 'transparent',
        padding:0,
      },

    root: {
        flex: 1,
        paddingTop: 0,
        backgroundColor:'#eee',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
});
