import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BackButton from './buttons/BackButton';
import theme from '../theme/theme';
import IconButton from './buttons/IconButton';

type Props = {
  title: string;
  style?: Object;
};

const Header: FC<Props> = ({title, style}) => {
  return (
    <View style={[styles.transactionUpperContainer, style]}>
      <View style={styles.flex}>
        <BackButton />
      </View>

      <View>
        <Text style={styles.transactionHead}>{title}</Text>
      </View>

      <View style={styles.flex} />
      <IconButton iconName="filter" />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Header;
