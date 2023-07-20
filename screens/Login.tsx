import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// import FIcon from 'react-native-vector-icons/FontAwesome5';
// import IonicIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useIsFocused} from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import IconSvg from '../components/mixed/IconSvg';
// import * as Animatable from 'react-native-animatable';

import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../theme/theme';

const Login = () => {
  const navigation = useNavigation<any>();

  const focused = useIsFocused();
  const userData = [
    {label: 'Email', icon: 'user-alt', size: 16},
    {label: 'password', icon: 'md-key', size: 20},
  ];
  return (
    <>
      {/* <SafeAreaView
        style={{
          flex: 1,
        }}> */}

      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/img/adhaar.png')}
            style={{height: '100%'}}
          />
        </View>

        <View style={styles.indicatorsContainer}>
          {[1, 2, 3].map((v, i) => (
            <View
              key={v}
              style={{
                width: i == 1 ? 30 : 6,
                height: 6,
                borderRadius: 25,
                backgroundColor: i == 1 ? 'black' : 'grey',
              }}></View>
          ))}
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <View
              style={{
                gap: 10,
              }}>
              <Text style={styles.stepText}>Step 1</Text>

              <View style={{gap: 5}}>
                <Text style={styles.headText}>fill your pan card detail</Text>
                <Text style={styles.infoDescription}>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur totam doloribus dolores a odio numquam aliquid.
                  Velit, rerum illo, similique provident labore aliquid porro
                  atque distinctio ullam voluptate placeat sequi!{' '}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home1')}
              style={[
                styles.button,
                // marginTop: 15,

                // elevation: 5,
                // shadowColor: '#0090A4',
              ]}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer2}>
            <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <StatusBar hidden={true} /> */}

      {/* <LinearGradient
        // colors={['#00606D', '#002C32']}
        // colors={['#00606D', 'black']}
        colors={['#00AFC7', '#014048']}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#002C32',
        }}> */}

      {/* <Image source={require('../assets/img/uni.svg')} /> */}

      {/* </LinearGradient> */}
      {/* </SafeAreaView> */}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: theme.primary.backgroundColor,
    borderTopLeftRadius: theme.primary.borderRadius,
    borderTopRightRadius: theme.primary.borderRadius,
  },
  footerContainer2: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    // backgroundColor: 'yellow',
  },
  skipButtonText: {
    fontWeight: '700',
    color: theme.primary.color,
  },
  footerContainer: {
    flex: 2,
    gap: 25,
    marginTop: 15,
    padding: 10,
    paddingHorizontal: 20,
  },

  indicatorsContainer: {
    marginTop: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },

  stepText: {
    color: theme.primary.color,

    fontSize: 20,
    fontWeight: '500',
  },
  headText: {
    fontSize: 16,
    color: theme.primary.color,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  infoDescription: {
    color: theme.primary.color,

    fontWeight: '300',
  },
  button: {
    backgroundColor: theme.secondary.backgroundColor,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    fontWeight: '600',
    color: theme.secondary.color,
  },
});

// <View style={{marginHorizontal: 40}}>
// {userData.map((user, i) => (
//   <View
//     // animation={i*800}

//     key={i}
//     style={{
//       marginBottom: 15,
//     }}>
//     {focused && (
//       <Text
//         // delay={i * 300}
//         // animation={'fadeIn'}
//         style={{
//           color: 'white',
//           fontFamily: 'Poppins-Medium',
//           marginBottom: 8,
//           fontSize: 13,
//           letterSpacing: 1,
//           textTransform: 'capitalize',
//         }}>
//         {user.label}
//       </Text>
//     )}

//     {/* Input Container */}
//     {focused && (
//       <View
//         // delay={i * 400}
//         // animation={'zoomIn'}
//         style={{
//           width: '100%',
//           flexDirection: 'row',
//           backgroundColor: 'white',
//           paddingHorizontal: 15,
//           borderRadius: 19,
//         }}>
//         <View
//           style={{
//             justifyContent: 'center',
//             // marginRight: 3,
//           }}>
//           {/* {i == 0 ? (
//           <FIcon
//             name={user.icon}
//             color="#008092"
//             size={user.size}
//           />
//         ) : (
//           <IonicIcon
//             name={user.icon}
//             color="#008092"
//             size={user.size}
//             style={{
//               padding: 0,
//               margin: 0,
//               // backgroundColor: 'green',
//             }}
//           />
//         )} */}
//         </View>

//         <TextInput
//           style={{
//             backgroundColor: 'transparent',
//             color: 'black',
//             width: '100%',
//             letterSpacing: 0.5,
//             fontSize: 13,
//             fontFamily: 'Poppins-Regular',
//             paddingVertical: 7,
//             paddingHorizontal: 8,
//             paddingRight: 15,
//           }}
//           placeholder={`Enter your ${user.label.toLowerCase()} `}
//           placeholderTextColor={'grey'}
//         />
//       </View>
//     )}
//   </View>
// ))}

// {focused && (
//   <View
//   // delay={800} animation={'fadeInUp'}
//   >
//     <TouchableOpacity
//       onPress={() => navigation.navigate('HomeStack')}
//       style={{
//         marginTop: 15,
//         backgroundColor: '#008092',
//         paddingVertical: 8,
//         borderRadius: 19,
//         // elevation: 5,
//         // shadowColor: '#0090A4',
//       }}>
//       <Text
//         style={{
//           color: 'white',
//           textAlign: 'center',
//           fontSize: 15,
//           fontFamily: 'Poppins-Medium',
//           textTransform: 'uppercase',
//           letterSpacing: 1.5,
//         }}>
//         Sign in
//       </Text>
//     </TouchableOpacity>
//   </View>
// )}

// <View
//   style={{
//     marginTop: 14,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   }}>
//   <Text
//     style={{
//       color: 'white',
//       fontFamily: 'Poppins-Regular',
//       fontSize: 13,
//       letterSpacing: 0.8,
//     }}>
//     Dont'have an Account
//   </Text>
//   <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
//     <Text
//       style={{
//         marginLeft: 8,
//         color: '#05CACA',
//         fontFamily: 'Poppins-Medium',
//         letterSpacing: 0.8,
//         fontSize: 13,

//         textTransform: 'uppercase',
//       }}>
//       SignUp
//     </Text>
//   </TouchableOpacity>
// </View>
// </View>
