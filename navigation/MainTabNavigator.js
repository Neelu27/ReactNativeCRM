import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator ,createAppContainer,} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SliderScreen from '../screens/SliderScreen';
import RichTextScreen from '../screens/RichTextScreen';
import NewContactScreen from '../screens/NewContactScreen';
import NewOpportunityScreen from '../screens/NewOpportunityScreen';
import RelationShipScreen from '../screens/RelationShipScreen';
import SearchOption from '../screens/SearchOption';
import TimeLineScreen from '../components/TimeLineScreen';
import Test from '../screens/Test';
import NestedCard from '../components/NestedCard';

// const initialNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Detail: DetailsScreen,
//
//   },
//   {
//     initialRouteName: "Home"
//   });
//
//
// export default initialNavigator;
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
    header: null,
  },
}
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Contact',
  tabBarOptions: {
      activeTintColor: "#2b79b0",
      inactiveTintColor: '#ccc',
      activeBackgNestedCardroundColor: '#ffffff',
      inactiveBackgroundColor: '#ffffff',
    },
  tabBarIcon: ({focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'? `ios-call${focused ? '' : '-outline'}`: 'md-call'}
      active={tintColor}
      inactive={tintColor}
    />
  ),
};



const DetailsStack = createStackNavigator({
  Details:{
  screen: DetailsScreen,
    navigationOptions: {
    header: null,
  },
  }
});
DetailsStack.navigationOptions = {
  tabBarLabel: 'Oppotunity',
  tabBarOptions: {
    activeTintColor: "#2b79b0",
    inactiveTintColor: '#ccc',
    activeBackgroundColor: '#ffffff',
    inactiveBackgroundColor: '#ffffff',
  },
  tabBarIcon: ({focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      active={tintColor}
      inactive={tintColor}
      name={Platform.OS === 'ios' ? 'ios-disc-outline' : 'md-disc'}
    />
  ),
  header: null,
};


const RelationStack = createStackNavigator({
  Relation:{
  screen: RelationShipScreen,
    navigationOptions: {
    header: null,
  },
  }
});
RelationStack.navigationOptions = {
  tabBarLabel:'Relation',
  tabBarOptions: {
    activeTintColor: "#2b79b0",
    inactiveTintColor: '#ccc',
    activeBackgroundColor: '#ffffff',
    inactiveBackgroundColor: '#ffffff',
  },
  tabBarIcon: ({focused, tintColor }) => (
      <TabBarIcon
        focused={focused}
        active={tintColor}
        inactive={tintColor}
        name={Platform.OS === 'ios' ? 'md-contacts' : 'md-contacts'}
      />
    ),
  header: null,
};




const navigateBar =  createBottomTabNavigator({
  HomeStack,
  DetailsStack,
  RelationStack,
});
const navigate = createStackNavigator({
// Home:{
//           screen: HomeScreen,
//           navigationOptions: {
//           header: null,
//         }
//    },

   Tab:{
     screen: navigateBar,
     navigationOptions: {
       header: null,
     }
   },
    NewContactScreen,
    NewOpportunityScreen,
    SearchOption,
  TimeLineScreen,
  NestedCard,
  Test,
  });
export default createAppContainer(navigate);
