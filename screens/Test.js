import React, {Component} from 'react';

import {Animated,TextInput,Alert,Dimensions, ScrollView,View, StatusBar, Text, Image, Platform, StyleSheet, Linking, TouchableOpacity,LayoutAnimation,KeyboardAvoidingView,Button,ImageBackground,FlatList} from 'react-native';
import {ScrollableTabView , ScrollableTabBar,DefaultTabBar} from '@valdio/react-native-scrollable-tabview';




import styles from '../components/style';
import ThemeUtils from '../components/ThemeUtils';
import Colors from '../components/Colors';
import HomeScreen from '../screens/HomeScreen';

import DetailsScreen from '../screens/DetailsScreen';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import TimeLineScreen from '../components/TimeLineScreen';
const { width } = Dimensions.get('window');
export default class Test extends Component {

  static navigationOptions =  ({ navigation }) => {
      const { params = {} } = navigation.state
         return {
           header:null,
                  }
             }



  backNav(){
    console.log(this.props.navigation,'gggggggggggg');
      this.props.navigation.goBack();
    }

    constructor(props) {
        super(props);
        this.state = {
          translateY: new Animated.Value(0),
           TabsTranslateY: new Animated.Value(5000),
           TabsHeight: new Animated.Value(290),
           scrollY: new Animated.Value(0)
        };
    }

    _getHeaderBackgroundColor = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: ['rgba(0,0,0,0.0)', Color.HEADER_COLOR],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };


    _getHeaderImageOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    _getImageLeftPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 80, 100],
            outputRange: [ThemeUtils.relativeWidth(37), ThemeUtils.relativeWidth(20), ThemeUtils.relativeWidth(10)],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };


    _getImageTopPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [ThemeUtils.relativeHeight(15), Platform.OS === 'ios' ? 8 : 30],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };


    _getImageWidth = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [ThemeUtils.relativeWidth(22), ThemeUtils.APPBAR_HEIGHT - 15],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };


    _getImageHeight = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [ThemeUtils.relativeWidth(22), ThemeUtils.APPBAR_HEIGHT - 15],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };


    _getImageBorderWidth = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [StyleSheet.hairlineWidth * 3, StyleSheet.hairlineWidth],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };


    _getImageBorderColor = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [Color.CARD_BG_COLOR, 'rgba(0,0,0,0.0)'],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };


    _getListViewTopPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: [ThemeUtils.relativeWidth(20) - ThemeUtils.APPBAR_HEIGHT - 30, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };


    _getHeaderTitleOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [0, 0.5, 1],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };


    _getNormalTitleOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });

    };
  //   componentWillMount() {
  //   LayoutAnimation.spring();
  // },
  // getInitialState() {
  //   return { top: 100,  }
  // },
  //
  //   _onScroll(){LayoutAnimation.spring();
  //   this.setState({top: this.state.top-90})
  // },}

    render() {
      const titleScale = this.state.scrollY.interpolate({
            inputRange: [0, 80,140],
            outputRange: [1, 1.1 ,1.2],
            extrapolate: 'clamp',
          });

          let TabsTranslateY = this.state.scrollY.interpolate({
             inputRange: [0, 600],
             outputRange: [0, -210],
             extrapolate: 'clamp'
           });
          let TabsBottom = this.state.scrollY.interpolate({
             inputRange: [0, 600],
             outputRange: [0, 50],
             extrapolate: 'clamp'
           });
          let opacityName =  this.state.scrollY.interpolate({
             inputRange: [0, 20, 50 ],
             outputRange: [0, 1 , 1],
             extrapolate: 'clamp',
             useNativeDriver: true
           });
          let colorname =  this.state.scrollY.interpolate({
              inputRange: [0, 20, 50 ],
              outputRange: ['#2a6185', '#2a6185','#2a6185'],
              extrapolate: 'clamp',
              useNativeDriver: true
          });
       const item =   this.props.navigation.getParam('user',null)
        const headerBackgroundColor = this._getHeaderBackgroundColor();

        const headerImageOpacity = this._getHeaderImageOpacity();

        const profileImageLeft = this._getImageLeftPosition();

        const profileImageTop = this._getImageTopPosition();

        const profileImageWidth = this._getImageWidth();

        const profileImageHeight = this._getImageHeight();

        const profileImageBorderWidth = this._getImageBorderWidth();

        const profileImageBorderColor = this._getImageBorderColor();

        const listViewTop = this._getListViewTopPosition();

        const headerTitleOpacity = this._getHeaderTitleOpacity();

        const normalTitleOpacity = this._getNormalTitleOpacity();

        return (
            <View style={styles.container}>
              <View style={{height:Constants.statusBarHeight,backgroundColor:'#2b79b0'}}></View>

                  <Image
                    style={[styles.headerImageStyle, ]}
                    source={require('../assets/images/images.jpeg')}
                    />

                <View style={[styles.headerStyle, {backgroundColor: headerBackgroundColor,}]}>
                      <View style={styles.headerLeftIcon}>
                        <TouchableOpacity onPress={()=>this.backNav()}><Ionicons name={"md-arrow-back"} size={25} color={Color.HEADER_BACK_ICON_COLOR} /></TouchableOpacity>
                      </View>
                      <View style={styles.headerRightIcon2}>
                        <Ionicons name={"md-chatboxes"} size={25} color={Color.HEADER_BACK_ICON_COLOR}/>
                      </View>
                      <View style={[styles.headerRightIcon1,{backgroundColor:'#ffffff',borderRadius:50,height:20,width:21,justifyContent:'center',alignItems:'flex-start'}]}>
                        <Ionicons name={"logo-whatsapp"} size={24} color={'green'} />
                      </View>
                      <View style={[styles.headerRightIcon,{backgroundColor:'#bb1212',borderRadius:0.5,height:14,width:18,justifyContent:'center',alignItems:'center'}]}>
                        <Ionicons name={"md-mail"} size={20} color={Color.HEADER_BACK_ICON_COLOR}/>
                      </View>

                </View>



              <Image style={[styles.profileImage,{height:70,width:70,borderRadius:50,position:'absolute',left:40,top:50}
                          ]}
                            source={item.img}
              />



                    <Text
                            style={[styles.profileTitle,{position:'absolute',top:125}]}>
                            {item.name}
                    </Text>
                    <Text
                            style={[styles.profileTitle1,{position:'absolute',top:85}]}>
                            {item.company}
                    </Text>
                    <Text
                            style={[styles.profileTitle2,{position:'absolute',top:110} ]}>
                          <Text>CIOC</Text>
                    </Text>




                      <ScrollableTabView
                      tabBarBackgroundColor={'#2a6185'}
                      tabBarActiveTextColor={'white'}
                      tabBarInactiveTextColor={'white'}
                      tabBarTextStyle={{fontSize: 16}}
                      style={{height:40,top:ThemeUtils.relativeHeight(15),}}
                      tabBarUnderlineStyle={{ backgroundColor: 'red', height: 3,}}
                      >


                          <ScrollView tabLabel="TimeLine"
                            >
                              <TimeLineScreen/>
                          </ScrollView>




                      <ScrollView tabLabel="Financier"
                        >
                          <View>
                              <TimeLineScreen/>
                          </View>
                      </ScrollView>
                      <ScrollView tabLabel="Task"
                        >
                          <View>
                            <TimeLineScreen/>
                          </View>
                      </ScrollView>


                      </ScrollableTabView>





                  <View style={{paddingBottom: 0,paddingRight: 90}}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.clickHandler}
                    style={styles.TouchableOpacityStyle}>
                    <Ionicons name="md-call" size={25} color="#fff"  />
                   </TouchableOpacity>
                 </View>

            </View>

        );
    }
}


// <Animated.View style={{flex:1,flexDirection:'row',backgroundColor:'blue',opacity: 1,height:40,zIndex:100}}>
//   <TouchableOpacity tabLabel='Back' onPress={()=>this.tabView.goToPage(0)}><View style={{flex:1,alignItems:'center',backgroundColor:'#2a6185'}}>
//     <Text style={{fontSize:16,color:"#ffffff",fontWeight:'700'}}>TimeLine</Text>
//   </View></TouchableOpacity>
//   <View style={{flex:1,alignItems:'center',backgroundColor:'#2a6185'}}>
//    <Text style={{fontSize:16,color:"#ffffff",fontWeight:'700'}}>TimeLine</Text>
//   </View>
//   <View style={{flex:1,alignItems:'center',backgroundColor:'#2a6185'}}>
//     <Text style={{fontSize:16,color:"#ffffff",fontWeight:'700'}}>TimeLine</Text>
//   </View>
//
//
// </Animated.View>
// )
// }
// }
// <Animated.View style={{
//   flex: 0,
//   transform: [{translateY: TabsTranslateY}],
//   height: Dimensions.get('window').height,
//   top:40,
//
// }}></Animated.View>
