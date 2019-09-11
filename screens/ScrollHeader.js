// import React, { Component } from 'react';
// import {
//   Animated,
//   Platform,
//   StatusBar,
//   StyleSheet,
//   Text,Image,
//   View, Dimensions,
//   RefreshControl,Tab,
// } from 'react-native';
// import HomeScreen from '../screens/HomeScreen';
// import DetailsScreen from '../screens/DetailsScreen';
// import { Ionicons } from '@expo/vector-icons';
// import ContactDetails from '../screens/ContactDetails';
// import ThemeUtils from '../components/ThemeUtils';
// const HEADER_MAX_HEIGHT = 300;
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 80;
// const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
// const { width } = Dimensions.get('window');
// export default class ScrollHeader extends Component {
//   static navigationOptions =  ({ navigation }) => {
//     const { params = {} } = navigation.state
//        return {
//          header:null,
//                 }
//            }
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       scrollY: new Animated.Value(
//
//         Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
//       ),
//       refreshing: false,
//
//     };
//   }
//
//   // _renderScrollViewContent() {
//   //   const data = Array.from({ length: 30 });
//   //
//   //   return (
//   //     <View style={styles.scrollViewContent}>
//   //       {data.map((_, i) => (
//   //         <View key={i} style={styles.row}>
//   //           <Text>{i}</Text>
//   //         </View>
//   //       ))}
//   //     </View>
//   //   );
//   // }
//
//   render() {
//
//     const scrollY = Animated.add(
//       this.state.scrollY,
//       Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
//     );
//     const headerTranslate = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [0, -HEADER_SCROLL_DISTANCE],
//       extrapolate: 'clamp',
//     });
//
//     const imageOpacity = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//       outputRange: [1, 0, 0],
//       extrapolate: 'clamp',
//     });
//     const imageTranslate = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [0, 100],
//       extrapolate: 'clamp',
//     });
//
//     const  profileImageLeft=scrollY.interpolate({
//         inputRange: [0, 80, HEADER_SCROLL_DISTANCE],
//         outputRange: [ThemeUtils.relativeWidth(30), ThemeUtils.relativeWidth(38), ThemeUtils.relativeWidth(10)],
//         extrapolate: 'clamp',
//
//     });
//     const profileImageTop=scrollY.interpolate({
//         inputRange: [0, HEADER_SCROLL_DISTANCE],
//         outputRange: [ThemeUtils.relativeHeight(20), Platform.OS === 'ios' ? 8 : 10],
//         extrapolate: 'clamp',
//
//     });
//     const profileImageWidth=scrollY.interpolate({
//         inputRange: [0, HEADER_SCROLL_DISTANCE],
//         outputRange: [ThemeUtils.relativeWidth(40), ThemeUtils.APPBAR_HEIGHT - 20],
//         extrapolate: 'clamp',
//
//     });
//     const profileImageHeight=scrollY.interpolate({
//         inputRange: [0, HEADER_SCROLL_DISTANCE],
//         outputRange: [40, ThemeUtils.APPBAR_HEIGHT - 20],
//         extrapolate: 'clamp',
//
//     });
//
//     const titleScale = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//       outputRange: [1, 1.1 ,1.2],
//       extrapolate: 'clamp',
//     });
//     const titleTranslate = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//       outputRange: [1,1.1,1.1],
//       extrapolate: 'clamp',
//     });
//     const item =   this.props.navigation.getParam('user',null)
//
//     const Header= this.props.navigation.getParam('scroll',null)
//     return (
//       <View style={styles.fill}>
//
//         <StatusBar
//           translucent
//           barStyle="light-content"
//           backgroundColor="rgba(0, 0, 0, 0.251)"
//         />
//         <Animated.ScrollView
//           style={styles.fill}
//           scrollEventThrottle={1}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
//             { useNativeDriver: true },
//           )}
//           refreshControl={
//             <RefreshControl
//               refreshing={this.state.refreshing}
//               onRefresh={() => {
//                 this.setState({ refreshing: true });
//                 setTimeout(() => this.setState({ refreshing: false }), 1000);
//               }}
//               progressViewOffset={HEADER_MAX_HEIGHT}
//             />
//           }
//           contentInset={{
//             top: HEADER_MAX_HEIGHT,
//           }}
//           contentOffset={{
//             y: -HEADER_MAX_HEIGHT,
//           }}
//         >
//
//               {<DetailsScreen/>}
//
//
//
//         </Animated.ScrollView>
//         <Animated.View
//           pointerEvents="none"
//           style={[
//             styles.header,
//             { transform: [{ translateY: headerTranslate }] },
//           ]}
//         >
//           <Animated.Image
//             style={[
//               styles.backgroundImage,
//               {
//                 opacity: imageOpacity,
//                 transform: [{ translateY: imageTranslate }],
//               },
//             ]}
//             source={require('../assets/images/images.jpeg')}
//           />
//         </Animated.View>
//
//         <Animated.View
//           style={
//             styles.bar2
//
//           }
//         >
//           <Ionicons name="md-arrow-back" size={32} color={'#ffffff'} />
//
//         </Animated.View>
//
//         <Animated.View style={{}}>
//
//
//         </Animated.View>
//
//         <Animated.View
//           style=
//
//             {{opacity: imageOpacity,
//               height: profileImageHeight,
//               width: profileImageWidth,
//             transform: [{ translateY: profileImageTop },{translateX: profileImageLeft}],  backgroundColor: 'transparent',
//               marginTop: Platform.OS === 'ios' ? 28 : 38,
//               height:100 ,
//               width:100,
//               alignItems: 'center',
//               justifyContent: 'center',
//               position: 'absolute',
//               top: 30,
//               left: width*0.375,
//               right: 0,}
//
//             }
//
//         >
//
//           <Image source={item.img} style={{justifyContent:'center',width:'100%',height:'100%',borderRadius:50,alignItems:'center'}}/>
//
//         </Animated.View>
//         <Animated.View
//           style={[
//             styles.bar,
//             {opacity: imageOpacity,
//               transform: [
//                 { scale: titleScale },
//                 { translateY: titleTranslate },
//
//               ],
//             },
//           ]}
//         >
//           <Text style={styles.title}>{item.name}</Text>
//
//         </Animated.View>
//         <Animated.View
//           style={[
//             styles.bar1,
//             {opacity: imageOpacity,
//               transform: [
//                 { scale: titleScale },
//                 { translateY: titleTranslate },
//
//               ],
//             },
//           ]}
//         >
//           <Text style={styles.title}>{item.company}</Text>
//
//         </Animated.View>
//         <Animated.View
//         style={[styles.bar3,{transform: [{ scale: titleScale },{ translateY: titleTranslate },],}]}>
//           <Ionicons name="md-mail" size={20} color={'#ffffff'} />
//           </Animated.View>
//         <Animated.View
//         style={[styles.bar4,{transform: [{ scale: titleScale },{ translateY: titleTranslate },],}]}>
//           <Ionicons name="md-call" size={20} color={'#ffffff'} />
//           </Animated.View>
//           <Animated.View  style={{backgroundColor: 'transparent',
//           marginTop: Platform.OS === 'ios' ? 28 : 38,
//           height: 32,
//           alignItems: 'center',
//           justifyContent: 'center',
//           position: 'absolute',
//           top:250,
//           left:-300,
//           right: 0,
//
//           transform: [{ scale: titleScale },{ translateY: titleTranslate },]}}>
//           <Text>TimeLine</Text>
//           </Animated.View>
//
//
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   fill: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//   },
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#03A9F4',
//     overflow: 'hidden',
//     height: HEADER_MAX_HEIGHT,
//   },
//   backgroundImage: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     width: width,
//     height: HEADER_MAX_HEIGHT,
//     resizeMode: 'cover',
//   },
//   bar: {
//     backgroundColor: 'transparent',
//     marginTop: Platform.OS === 'ios' ? 28 : 38,
//     height: 32,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//     top: 135,
//     left: 0,
//     right: 0,
//   },
//   bar1: {
//     backgroundColor: 'transparent',
//     marginTop: Platform.OS === 'ios' ? 28 : 38,
//     height: 32,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//     top:175,
//     left: 0,
//     right: 0,
//   },
//   bar2: {
//     backgroundColor: 'transparent',
//     marginTop: Platform.OS === 'ios' ? 28 : 38,
//     height: 32,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: width*0.85,
//     color:'#ffffff',
//   },
//
//   bar3: {
//     backgroundColor: 'transparent',
//     marginTop: Platform.OS === 'ios' ? 28 : 38,
//
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//     top: HEADER_MAX_HEIGHT*0.02,
//     left:  width*0.9,
//     right:0,
//
//   },
//   bar4: {
//     backgroundColor: 'transparent',
//     marginTop:Platform.OS === 'ios' ? 28 : 38,
//
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//     top: HEADER_MAX_HEIGHT*0.02,
//     left: width*0.78,
//     right: 0,
//
//
//   },
//   title: {
//     color: 'white',
//     fontSize: 18,
//   },
//   scrollViewContent: {
//     // iOS uses content inset, which acts like padding.
//     paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
//   },
//   row: {
//     height: 500,
//     margin: 16,
//     backgroundColor: '#D3D3D3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
