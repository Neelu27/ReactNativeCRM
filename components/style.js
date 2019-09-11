import {StyleSheet} from 'react-native'
import ThemeUtils from '../components/ThemeUtils';
import Colors from '../components/Colors';
import Constants from 'expo-constants';
const HEADER_IMAGE_HEIGHT = ThemeUtils.relativeHeight(25);
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    /*header style*/
    headerLeftIcon: {
        position: 'absolute',
        left: ThemeUtils.relativeWidth(2),
    },
    headerRightIcon: {
        position: 'absolute',
        right: ThemeUtils.relativeWidth(4),
    },
    headerRightIcon1: {
        position: 'absolute',
        right: ThemeUtils.relativeWidth(18),
    },
    headerRightIcon2: {
        position: 'absolute',
        right: ThemeUtils.relativeWidth(32),
    },
    headerStyle: {
        height: ThemeUtils.APPBAR_HEIGHT,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
    },
    headerTitle: {
        textAlign: 'center',
        justifyContent: 'space-between',
        alignSelf:'stretch',
        color: Color.HEADER_TEXT_COLOR,
        fontSize: ThemeUtils.fontNormal,
        position:'absolute',
        left:ThemeUtils.relativeWidth(26),
    },
    headerTitlename:{
        textAlign: 'center',
        justifyContent: 'space-between',
        alignSelf:'stretch',
        color: Color.HEADER_TEXT_COLOR,
        fontSize: ThemeUtils.fontNormal,
        position:'absolute',
        top:ThemeUtils.relativeWidth(8.7),
        left:ThemeUtils.relativeWidth(10),
    },
    /*Top Image Style*/
    headerImageStyle: {
        height: HEADER_IMAGE_HEIGHT,
        width: '100%',
        top: Constants.statusBarHeight,
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor:'#ffffff',
    },
    /*profile image style*/
    profileImage: {
        position: 'absolute',
        top:ThemeUtils.relativeWidth(-12),
        left:ThemeUtils.relativeWidth(-28),
        zIndex: 200,


    },
profileImage1:{
  position: 'absolute',

  left:ThemeUtils.relativeWidth(10),
  top:ThemeUtils.relativeWidth(8),
  zIndex: 200,
  width:45,
  height:45,
  borderRadius:50,
},

    /*profile title style*/
    profileTitle: {
        position: 'absolute',
        zIndex:200,
        textAlign: 'center',
        alignContent:'space-around',
        color: '#ffffff',
        top: ThemeUtils.relativeHeight(22),
        left: ThemeUtils.relativeWidth(-62),
        right: 0,
        fontSize: 20,
    },
    profileTitle1: {
        position: 'absolute',
        zIndex:200,
        textAlign: 'center',
        alignContent:'space-around',
        color: '#ffffff',
        top: ThemeUtils.relativeHeight(14),
        left: 0,
        right:ThemeUtils.relativeWidth(-60),
        fontSize: 16,
    },
    profileTitle2: {
        position: 'absolute',
        zIndex:200,
        textAlign: 'center',
        alignContent:'space-around',
        color: '#ffffff',
        top: ThemeUtils.relativeHeight(18),
        left: 0,
        right:ThemeUtils.relativeWidth(-80),
        fontSize: 16,
    },
    TouchableOpacityStyle: {
       position: 'absolute',
       width: 45,
       height: 45,
       alignItems: 'center',
       justifyContent: 'center',
       right: 30,
       bottom: 30,
       backgroundColor: '#2bb048',
       zIndex: 1,
       borderRadius:25,
     },
    /*song count text style*/
    songCountStyle: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: '400',
        top: ThemeUtils.relativeHeight(40),
        left: 0,
        right: 0,
        fontSize: ThemeUtils.fontNormal,
    },

})
// artistCardContainerStyle: {
//     backgroundColor: Color.CARD_BG_COLOR,
//     elevation: 5,
//     shadowRadius: 3,
//     shadowOffset: {
//         width: 3,
//         height: 3
//     },
//     padding: 15,
//     marginVertical: ThemeUtils.relativeWidth(1),
//     marginHorizontal: ThemeUtils.relativeWidth(2),
//     flexDirection: 'row',
//     alignItems: 'center'
// },
// artistImage: {
//     height: ThemeUtils.relativeWidth(15),
//     width: ThemeUtils.relativeWidth(15),
//     borderRadius: ThemeUtils.relativeWidth(7.5)
// },
// songTitleStyle: {
//     fontSize: ThemeUtils.fontNormal,
//     color: Color.BLACK
// },
// cardTextContainer: {
//     flex: 1,
//     margin: ThemeUtils.relativeWidth(3)
// },
