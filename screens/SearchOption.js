
import React, { Component } from 'react';
import { View, Text,Dimensions,Alert } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

const { width } = Dimensions.get('window');

var items=[
  { id: 1, name: 'angellist' },
  { id: 2, name: 'codepen' },
  { id: 3, name: 'envelope' },
  { id: 4, name: 'etsy' },
  { id: 5, name: 'facebook' },
  { id: 6, name: 'foursquare' },
  { id: 7, name: 'github-alt' },
  { id: 8, name: 'github' },
  { id: 9, name: 'gitlab' },
  { id: 10, name: 'instagram' },
];
export default class SearchOption extends Component {
  constructor() {
    super();
    this.state = {
      selected: [],
    };
  }


  componentDidMount(){
    // fetch('https://restcountries.eu')
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log('Server response :- \n', response);
    //     this.setState({
    //       selected: [...this.state.selected, ...responseJson.results],
    //     })
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchableDropdown
          onTextChange={item => console.log(item)}
          onItemSelect={item => console.log(JSON.stringify(item))}
          containerStyle={{ padding: 0 }}
          textInputStyle={{
            paddingLeft:6,
            borderWidth: 0.2,
            minHeight:35,
            width:width*0.75,
            backgroundColor: '#ffffff',
          }}
          itemStyle={{
            padding: 10,
            marginTop: 0,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 0,
          }}
          itemsContainerStyle={{
            maxHeight: '100%',
            borderWidth: 0.2,
            width:width*0.75,
          }}
          items={this.state.selected}
          defaultIndex={0}
          resetValue={false}
          underlineColorAndroid="transparent"
          />
      </View>
    );
  }
}
