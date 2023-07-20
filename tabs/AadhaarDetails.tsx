import {StyleSheet, ScrollView, StatusBar, Text} from 'react-native';
import React from 'react';
// import Courses from '../components/Home/Courses';
// import Courses_btns from './Courses_btns';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const AadhaarDetails = () => {
  return (
    <SafeAreaView
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        },
      ]}>
      {/* <StatusBar hidden={true} /> */}
      <ScrollView style={styles.main_container}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          aspernatur praesentium, porro tempora culpa, autem optio quis qui esse
          vero officiis quidem suscipit voluptatem debitis similique.
          Repudiandae at veniam optio?
        </Text>
        {/* <Courses_btns /> */}
        {/* <Courses /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AadhaarDetails;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#F4F4FC',
    // flex: 1,
    fontFamily: 'Poppins-Regular',
    // marginBottom: 30,
  },
});
