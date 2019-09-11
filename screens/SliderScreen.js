
import React from 'react';
import {StyleSheet, Text, View, Slider} from 'react-native';

export default class SliderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
      minimumValue: 0,
      maximumValue:100,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={{paddingBottom:2}}>Confidence(in%)</Text>
          <View style={{flexDirection:'row',justifyContent: 'space-between',padding:0}}>
             <Text>{this.state.minimumValue} %</Text>
             <Text>{this.state.value + '%'}</Text>
             <Text>{this.state.maximumValue} %</Text>
         </View>
         <Slider
            step={1}
            maximumValue={100}
            onValueChange={this.change.bind(this)}
            value={this.state.value }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop:6,paddingBottom:6,
  },
});
