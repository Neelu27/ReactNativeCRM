import React,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { Editor } from '@tinymce/tinymce-react';
import Constants from 'expo-constants';

import SliderScreen from '../screens/SliderScreen';

export default class RelationShipScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
          <View style={{height:Constants.statusBarHeight,backgroundColor:'#2b79b0'}}></View>
          <View style={styles.maincontainer}>
        <Text>RelationShip Screen....</Text>
      <SliderScreen/>

      </View>
    </View>
    );
  }
};
const styles=StyleSheet.create({
  maincontainer: {
    flex:1,
    justifyContent:'center',
  },
});
