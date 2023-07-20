import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
// import Friends from '../screens/Friends';
// import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
// import Downloads from '../screens/Downloads';
// import Messages from '../screens/Messages';
// import Settings from '../screens/Settings';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as Animatable from 'react-native-animatable';

import F5 from 'react-native-vector-icons/FontAwesome5';
import Downloads from './Downloads';
import PanDetails from './DocxDetails';
import AadhaarDetails from './AadhaarDetails';
import CongratulationPage from './CongratulationPage';
import Selfie from './Selfie';
import Transaction from './Transaction';
import MainHome from './MainHome';
import ChangePin from './ChangePin';
import ManageCard from '../screens/ManageCard';
import AddMoneyPage from './AddMoneyPage';
import TransferMoney from './TransferMoney';
import SelectBanks from './SelectBanks';
import BlockCard from './BlockCard';
import Wallet from './Wallet';
import PanCard from '../screens/PanCard';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const tabIcons = [
    'user-friends',
    'comment',
    'home',
    'arrow-circle-down',
    'cog',
  ];

  const TabButton = (props: {item: any; focused: any}) => {
    const {item, focused} = props;

    // console.log(props);

    const viewRef = useRef<any>(null);
    // useEffect(() => {
    //   if (focused) {
    //     viewRef?.current?.bounce();
    //   }
    // }, [focused]);

    return (
      <View
        style={{
          // width: '100',
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // width: focused ? 55 : 'auto',
          // height: focused ? 55 : 'auto',
          // elevation: focused ? 5 : 0,
          // padding: 10,
          // justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: focused ? '#008A9E' : 'transparent',
          // borderRadius: 50,
          transform: [
            // {scale: focused ? 1.3 : 1},
            // {translateY: focused ? -50 : 0},
          ],
        }}
        ref={viewRef}></View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="PAN"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 3,

          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,

          // borderRadius: 50,
          height: 60,
          position: 'absolute',
          // bottom: 10,
          // right: 15,
          // left: 15,
        },
      }}>
      <Tab.Screen
        name={'PAN'}
        component={PanDetails}
        options={{
          // tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name={'Aadhaar'}
        component={AadhaarDetails}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name={'Wallet'}
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: props => {
            return (
              // <TabButton item={undefined} {...props} />
              <F5
                name={'wallet'}
                size={20}
                style={{
                  transform: [{scale: props.focused ? 1.3 : 1}],
                  color: props.focused ? 'black' : '#1C1D1F',
                  // opacity: 0.6,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
        name={'Congo'}
        component={CongratulationPage}
      />

      <Tab.Screen
        options={{
          headerShown: false,

          tabBarIcon: props => {
            return (
              // <TabButton item={undefined} {...props} />
              <F5
                name={'credit-card'}
                size={20}
                style={{
                  transform: [{scale: props.focused ? 1.3 : 1}],
                  color: props.focused ? '#000' : '#1C1D1F',
                }}
              />
            );
          },
        }}
        name={'AddMoney'}
        component={AddMoneyPage}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: props => {
            return (
              // <TabButton item={undefined} {...props} />
              <F5
                name={'home'}
                size={20}
                style={{
                  transform: [{scale: props.focused ? 1.3 : 1}],
                  color: props.focused ? '#000' : '#1C1D1F',
                }}
              />
            );
          },
        }}
        name={'MainHome'}
        component={MainHome}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
        name={'TMoney'}
        component={TransferMoney}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
        name={'SelectBanks'}
        component={SelectBanks}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
        name={'Selfie'}
        component={Selfie}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: () => null,
        }}
        name={'Transactions'}
        component={Transaction}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
        name={'ManageCard'}
        component={ManageCard}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: props => {
            return (
              // <TabButton item={undefined} {...props} />
              <F5
                name={'exchange-alt'}
                size={20}
                style={{
                  transform: [{scale: props.focused ? 1.3 : 1}],
                  color: props.focused ? '#000' : '#1C1D1F',
                }}
              />
            );
          },
        }}
        name={'ChangePin'}
        component={ChangePin}
      />
      <Tab.Screen
        options={{
          headerShown: false,

          tabBarIcon: props => {
            return (
              // <TabButton item={undefined} {...props} />
              <F5
                name={'shield-alt'}
                size={20}
                style={{
                  transform: [{scale: props.focused ? 1.3 : 1}],
                  color: props.focused ? '#000' : '#1C1D1F',
                }}
              />
            );
          },
        }}
        name={'BlockCard'}
        component={BlockCard}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  head_container: {
    backgroundColor: '#F4F4FC',
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  svg_btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_greet: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#006C7B',
    letterSpacing: 0.2,
  },
  img_container: {
    elevation: 5,
    shadowColor: 'aqua',
    borderRadius: 20,
    marginLeft: 20,
  },
  user_img: {borderRadius: 50, width: 40, height: 40},
});

export default TabStack;
