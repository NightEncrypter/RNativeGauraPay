import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import theme from '../theme/theme';
import Header from '../components/Header';
import NormalButton from '../components/buttons/NormalButton';

const ManageCard = () => {
  const [viewBalance, setViewBal] = useState(false);
  const [mode, setMode] = useState<'physical' | 'virtual'>('physical');
  return (
    <View style={theme.container}>
      <View style={styles.main_container}>
        <Header title="Expense Card" style={{marginBottom: 20}} />
      </View>
      {/* Section */}
      <View style={[styles.upperSection, {paddingHorizontal: 20}]}>
        <View style={styles.buttonGroup}>
          <NormalButton
            buttonText="Physical Card"
            buttonStyle={[styles.tabButton, styles.enabled]}
            buttonTextColor={[{color: theme.secondary.color}, styles.enabled]}
          />
          <NormalButton
            buttonText="Virtual Card"
            buttonStyle={[styles.tabButton]}
            buttonTextColor={{color: theme.secondary.color}}
          />
        </View>
        {/* Card */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/img/card.png')} />
        </View>
      </View>
      {/* Bottom section */}
      <View style={{paddingHorizontal: 20}}>
        <NormalButton
          buttonText="Card Statement"
          buttonStyle={styles.mainButton}
          buttonTextColor={{color: theme.secondary.color}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardUpperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  main_container: {
    // minHeight: 330,
    padding: 20,
    backgroundColor: 'white',
    // flex: 1,
  },
  upperSection: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabButton: {
    padding: 10,
    backgroundColor: theme.secondary.backgroundColor,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    width: 180,
  },
  enabled: {
    backgroundColor: theme.primary.backgroundColor,
    color: theme.primary.color,
  },
  mainButton: {
    padding: 10,
    backgroundColor: theme.secondary.backgroundColor,
    color: theme.secondary.color,
    borderRadius: 8,
  },
});

export default ManageCard;
