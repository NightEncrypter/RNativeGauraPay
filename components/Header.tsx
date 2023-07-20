import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BackButton from './buttons/BackButton';
import theme from '../theme/theme';
import IconButton from './buttons/IconButton';

type Props = {
  title: string;
  style?: Object;
  iconName?: string;
};

const Header: FC<Props> = ({title, style, iconName}) => {
  return (
    <View style={[styles.transactionUpperContainer, style]}>
      <View style={styles.flex}>
        <BackButton />
      </View>

      <View>
        <Text style={styles.transactionHead}>{title}</Text>
      </View>
      {iconName ? (
        <>
          {' '}
          <IconButton iconName={iconName} />
        </>
      ) : (
        <View style={styles.flex} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  transactionHead: {
    fontSize: 24,
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
