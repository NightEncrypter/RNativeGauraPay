import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import BackButton from '../components/buttons/BackButton';
import theme from '../theme/theme';
import SearchBar from '../components/SearchBar';
import {ScrollView} from 'react-native';
import TransactionCard from '../components/cards/TransactionCard';

const Transaction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main_container}>
        <View style={styles.transactionUpperContainer}>
          <View style={styles.flex}>
            <BackButton />
          </View>

          <View>
            <Text style={styles.transactionHead}>Transaction</Text>
          </View>
          <View style={styles.flex} />
        </View>
        <SearchBar />
      </View>

      <ScrollView style={styles.scrollContainer}>
        {new Array(30).fill(0).map((v, i) => (
          <TransactionCard key={i} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBCBCB',
    // marginHorizontal: 20,
  },

  scrollContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  main_container: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    // minHeight: 330,
    padding: 20,
    backgroundColor: 'white',
    // flex: 1,
  },

  boxContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    elevation: 4,
    marginBottom: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerBox: {
    flexDirection: 'row',
    gap: 10,
  },
  transactionHead: {
    fontSize: 25,
    fontWeight: '600',
    color: theme.primary.backgroundColor,
  },
  flex: {
    flex: 1,
  },
  transactionContainer: {
    flex: 1,
    padding: 20,
  },
  transactionUpperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
});

export default Transaction;
