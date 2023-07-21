import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import theme from '../theme/theme';

type Props = {
  docText?: string;
  step?: string;
  page?: string;
  imgUrl?: string;
};
const AadhaarInfo: FC<Props> = ({docText, step, page, imgUrl}) => {
  const navigation = useNavigation<any>();

  return (
    <>
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
              <Text style={styles.stepText}>Step 2</Text>

              <View style={{gap: 5}}>
                <Text style={styles.headText}>
                  fill your Aadhar card detail
                </Text>
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
              onPress={() => navigation.navigate('Aadhaar')}
              style={[styles.button]}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer2}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

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
    marginBottom: 35,
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

export default AadhaarInfo;
