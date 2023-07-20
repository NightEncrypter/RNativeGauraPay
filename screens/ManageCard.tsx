import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import theme from '../theme/theme';
import Header from '../components/Header';
import NormalButton from '../components/buttons/NormalButton';
import F5 from 'react-native-vector-icons/FontAwesome5';

import IconButton from '../components/buttons/IconButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const ManageCard = () => {
  const [viewBalance, setViewBal] = useState(false);
  const [mode, setMode] = useState<'physical' | 'virtual'>('virtual');
  const [active, setActive] = useState(false);

  const openUnitBox = () => {
    setActive(prev => !prev);
  };
  return (
    <ScrollView style={[theme.container]}>
      <View style={styles.main_container}>
        <Header title="Expense Card" style={{marginBottom: 20}} />
      </View>
      {/* Section */}
      <View style={[styles.upperSection, {paddingHorizontal: 20}]}>
        {viewBalance ? (
          <View style={{alignItems: 'center'}}>
            <View style={styles.expense}>
              <IconButton
                iconName="filter"
                buttonStyle={{height: 30, width: 30}}
                iconSize={15}
              />
              <Text style={{fontSize: 20}}>₹ 200.00</Text>
              <NormalButton
                buttonStyle={styles.addBtn}
                buttonText="+ Add"
                buttonTextColor={{color: 'rgba(0,0,0,0.3)'}}
              />
              {/* <TouchableOpacity style={ styles.addBtn }> */}
              {/* <Text>+ Add</Text> */}
              {/* </TouchableOpacity> */}
            </View>
          </View>
        ) : (
          <View style={styles.buttonGroup}>
            <NormalButton
              onPress={() => setMode('physical')}
              buttonText="Physical Card"
              buttonStyle={[
                styles.tabButton,
                mode === 'physical' && styles.enabled,
              ]}
              buttonTextColor={[
                {color: theme.secondary.color},
                mode === 'physical' && styles.enabled,
              ]}
            />
            <NormalButton
              onPress={() => setMode('virtual')}
              buttonText="Virtual Card"
              buttonStyle={[
                styles.tabButton,
                mode === 'virtual' && styles.enabled,
              ]}
              buttonTextColor={[
                {color: theme.secondary.color},
                mode === 'virtual' && styles.enabled,
              ]}
            />
          </View>
        )}
        {/* Card */}
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/img/card-4.png')} />
          <View style={{position: 'absolute', left: 30, right: 30, bottom: 30}}>
            {viewBalance && (
              <TouchableOpacity
                onPress={() => setViewBal(false)}
                style={{
                  position: 'absolute',
                  right: 30,
                  top: -40,
                  //   transform: 'translateY(-50%)',
                }}>
                <F5 name="eye" size={20} style={{color: theme.primary.color}} />
              </TouchableOpacity>
            )}
            {viewBalance ? (
              <View style={styles.balContainer}>
                <View>
                  <Text style={{color: '#fff'}}>Name</Text>
                  <Text style={{color: '#fff'}}>Jacob Jones</Text>
                </View>
                <View>
                  <Text style={{color: '#fff'}}>Cvv 123</Text>
                  <Text style={{color: '#fff'}}>Expire 04/2023</Text>
                </View>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => setViewBal(true)}
                style={styles.viewBtn}>
                <F5 name="eye" size={20} style={{color: theme.primary.color}} />
                <Text style={{color: theme.primary.color}}>View Balance</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{position: 'absolute', top: 25, right: 30}}>
            <Text style={{color: '#fff'}}>
              {mode === 'physical' ? 'Physical Card' : 'Business Card'}
            </Text>
          </View>
        </View>
      </View>
      {/* Bottom section */}
      <View style={{paddingHorizontal: 20}}>
        {viewBalance ? (
          <View>
            <TouchableOpacity
              style={[styles.accordionContainer, {marginBottom: 10}]}
              onPress={openUnitBox}>
              <Text style={styles.accordion}>Select Card</Text>

              <Icon size={20} name={active ? 'chevron-up' : 'chevron-down'} />
            </TouchableOpacity>
            <View style={styles.controlContain}>
              {[
                'Online Payment',
                'in-store payment',
                'cash withdrawals',
                'contactless ( tap & pay )',
              ].map((option, i) => (
                <View key={i} style={styles.togglePane}>
                  <Text style={{fontSize: 18}}>{option}</Text>
                  <Icon
                    size={20}
                    name={active ? 'chevron-up' : 'chevron-down'}
                  />
                </View>
              ))}
            </View>
            {/* You can add */}
            <View
              style={{
                backgroundColor: '#EDF1D6',
                padding: 20,
                borderRadius: 8,
                gap: 10,
                marginBottom: 100,
              }}>
              <Text style={{color: '#609966'}}>
                you can add upto 9,000.00 to your account this month.
              </Text>
              <Text style={{color: '#F66868'}}>
                click here to complete biometric kyc to increase annual limits.
              </Text>
            </View>
          </View>
        ) : (
          <NormalButton
            buttonText="Card Statement"
            buttonStyle={styles.mainButton}
            buttonTextColor={{color: theme.secondary.color}}
          />
        )}
      </View>
    </ScrollView>
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
  viewBtn: {
    flexDirection: 'row',
    gap: 5,
    zIndex: 2,
  },
  expense: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  addBtn: {
    backgroundColor: '#EBE8E8',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  balContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#fff',
    width: '100%',
  },
  accordionContainer: {
    marginTop: 15,
    backgroundColor: theme.secondary.backgroundColor,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  accordion: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    paddingVertical: 8,
    fontWeight: '700',

    // color: '#fff',
    // textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  controlContain: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  togglePane: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ManageCard;
