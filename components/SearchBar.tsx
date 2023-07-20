import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  // const navigation = useNavigation<any>();

  return (
    <View style={{marginTop: 8}}>
      <View style={styles.search_container}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Icon name="search" size={20} style={{}} />
        </TouchableOpacity>
        <TextInput
          style={styles.search_input}
          placeholderTextColor={'grey'}
          placeholder={'Search Transaction...'}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search_container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#EDEEF0',
    paddingHorizontal: 15,
    borderRadius: 20,
    paddingVertical: 5,
  },
  search_input: {
    backgroundColor: 'transparent',
    color: 'black',
    paddingVertical: 6,
    width: '93%',
    letterSpacing: 1,
    fontSize: 16,

    fontFamily: 'Poppins-Regular',
  },
});
