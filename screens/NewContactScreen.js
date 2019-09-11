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
import { Switch } from 'react-native-switch';
import InputView from 'rn-autoheight-input'
import ButtonGroup from 'react-native-button-group';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
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
    };

    ShowAlert = (value) =>{
      this.setState({
        SwitchOnValueHolder: value
      })
      if(value == true){
        this.state.imgView=value;
      }else{
        this.state.imgView=value;
      }
    };

    ShowViewState=()=>{
        var   show=this.state.show;
      if(show==true){
        this.setState({
            show:false
        });
      }
    }

    HideViewState=()=>{
    var show=this.state.show;
          if(show==false){
        this.setState({
            show:true,
        });
      }
    }

  static navigationOptions =  ({ navigation }) => {
  const { params = {} } = navigation.state
     return {
       title: 'Create a New Contact',
           headerStyle: {
                 backgroundColor: '#2b79b0',
                 height: 45
               },
            headerTintColor: '#fff',
            headerTitleStyle: {
                  alignSelf: 'center',
                  marginLeft:5,
                }
               }
         };

  render(){
    return(
      <KeyboardAvoidingView
      behavior="padding"
      enabled
      keyboardVerticalOffset={IS_IOS ? 0 : 0}
      style={styles.root}>

      <View style={styles.container}>
        <ScrollView>
          <View style={{flexDirection:'row',marginTop:30,paddingTop:8,paddingBottom:8,paddingLeft:8,}}>
          <Text style={{paddingTop:6,paddingRight:4,paddingLeft:8,fontSize:16}}>Mrs.</Text>
                  <Switch
                        value={this.state.SwitchOnValueHolder}
                        onValueChange={(value) => this.ShowAlert(value)}
                        height={25}
                        width={50}
                        containerStyle={{width:50,height:25}}
                        backgroundActive={'#ffffff'}
                        backgroundInactive={'#ffffff'}
                        circleActiveColor={'#2b79b0'}
                        circleInActiveColor={'#2b79b0'}
                        circleBorderWidth={0}/>

          <Text style={{paddingTop:6,paddingLeft:4,fontSize:16}}>Mr.</Text>

                        {this.state.imgView?<View style={{marginLeft:width*0.395,width:width*0.2,height:width*0.2,marginBottom:20}}><Image source={require('../assets/images/img_avatar_card.png')} style={{width:'100%',height:'100%',borderRadius:50}}/></View>:
                        <View style={{marginLeft:width*0.395,width:width*0.2,height:width*0.2,marginBottom:20}}><Image source={require('../assets/images/6.png')} style={{width:'100%',height:'100%',borderRadius:50}}/></View>}

            </View>


            <View style={{flexDirection:'column',padding:8,marginHorizontal:10,marginTop:-80}}>

                  <View style={{flexDirection:'column',}}>
                        <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Full Name</Text>
                        <TextInput style={{height:30,paddingLeft:6,padding:4,  borderWidth: 0.2,fontSize:16,marginRight:100,backgroundColor:'#ffffff'}}
                          onChangeText={(text) => this.setState({text})}
                          value={this.state.text}>
                        </TextInput>
                  </View>

                  <View style={{flexDirection:'column',}}>
                          <Text style={{paddingTop:6,paddingBottom:2, fontSize:16}}>Email</Text>
                          <TextInput style={{height:30,paddingLeft:6,padding:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                            onChangeText={(text1) => this.setState({text1})}
                            value={this.state.text1}>
                          </TextInput>
                  </View>

                  <View style={{flexDirection:'column',}}>
                        <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Mobile</Text>
                        <TextInput style={{height:30,paddingLeft:6,padding:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                          onChangeText={(number) => this.setState({number})}
                          value={this.state.number}>
                        </TextInput>
                  </View>

                  <View style={{flexDirection:'column',}}>
                        <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Company</Text>
                        <TextInput style={{height:30,paddingLeft:6,padding:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                          onChangeText={(text2) => this.setState({text2})}
                          value={this.state.text2}>
                        </TextInput>
                  </View>


                  {this.state.show?<View style={{flexDirection:'column'}}>
                            <TouchableOpacity style={{paddingTop:10,paddingLeft:0,paddingBottom:5,flexDirection:'row'}} onPress={(show)=>{this.ShowViewState(show)}}>
                              <Ionicons name="md-arrow-dropdown" size={22} color={'#334ac3'}/>
                            <Text style={{fontSize:16,color:'#334ac3',paddingLeft:4}}>Show advance options</Text></TouchableOpacity>



                  </View>

                  :<View style={{flexDirection:'column'}}>
                          <TouchableOpacity style={{paddingTop:10,paddingLeft:0,paddingBottom:10,flexDirection:'row'}} onPress={(show)=>{this.HideViewState(show)}}>
                            <Ionicons name="md-arrow-dropup" size={22} color={'#334ac3'} style={{paddingTop:2}} />
                            <Text style={{fontSize:16,color:'#334ac3',paddingLeft:4}}>Hide advance options</Text></TouchableOpacity>
                          <View style={{flexDirection:'column',}}>
                                <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Mobile (Secondary)</Text>
                                <TextInput style={{height:30,paddingLeft:6,padding:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                                  onChangeText={(number1) => this.setState({number1})}
                                  value={this.state.number1}>
                                </TextInput>
                          </View>

                          <View style={{flexDirection:'column',}}>
                                  <Text style={{paddingTop:6,paddingBottom:2, fontSize:16}}>Email (Secondary)</Text>
                                  <TextInput style={{height:30,paddingLeft:6,padding:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                                    onChangeText={(text3) => this.setState({text3})}
                                    value={this.state.text3}>
                                  </TextInput>
                          </View>

                          <View style={{flexDirection:'column',}}>
                                <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Designation</Text>
                                <TextInput style={{height:30,paddingLeft:6,padding:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                                  onChangeText={(text4) => this.setState({text4})}
                                  value={this.state.text4}>
                                </TextInput>
                          </View>

                          <View style={{flexDirection:'column',}}>
                                <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Notes</Text>
                                  <AutoGrowingTextInput style={{height:25,paddingLeft:6,padding:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff',borderBottomWidth:0.2}} minHeight={25}
                                    maxHeight={300}
                                    onChangeText={(text5) => this.setState({text5})}
                                   value={this.state.text5}/>
                               </View>

                          <View style={{flexDirection:'column',}}>
                                <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>LinkedIn</Text>
                                <TextInput style={{height:30,paddingLeft:6,padding:4,   borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                                  onChangeText={(text6) => this.setState({text6})}
                                  value={this.state.text6}>
                                </TextInput>
                          </View>

                          <View style={{flexDirection:'column',}}>
                                <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Facebook</Text>
                                <TextInput style={{height:30,paddingLeft:6,padding:4,borderWidth: 0.2,fontSize:16,backgroundColor:'#ffffff'}}
                                  onChangeText={(text7) => this.setState({text7})}
                                  value={this.state.text7}>
                                </TextInput>
                          </View>

                          <View style={{flexDirection:'column',}}>
                                <Text style={{paddingTop:6,paddingBottom:2,fontSize:16}}>Dp</Text>
                                 <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
                                   <Button title={'Browser'}/>
                                 <TouchableOpacity>
                                 <Text style={{fontSize:16,color:'#605f66',padding:4}}>No file...</Text>
                               </TouchableOpacity>
                                 </View>

                          </View>
                          <View style={{flex:1}}></View>



                  </View>}
            </View>
           </ScrollView>
           <View style={{marginLeft:15,marginRight:15,marginBottom:20,flexDirection:'row'}}>
             <TouchableOpacity style={{justifyContent:'flex-start',alignSelf:'flex-start',width:'50%'}}>
              <Button title={'Scan'}/>
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent:'flex-start',alignSelf:'flex-start',width:'50%'}}>
             <Button title={'Save'} style={{justifyContent:'flex-start',alignSelf:'flex-end'}}/>
             </TouchableOpacity>
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
