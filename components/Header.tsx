import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BackButton from './buttons/BackButton';
import theme from '../theme/theme';
import IconButton from './buttons/IconButton';

type Props = {
  dark?: boolean;
  title: string;
  style?: Object;
  titleStyle?: Object;
  iconName?: string;
  flex1?: boolean;
  flex3?: boolean;
  flex2?: boolean;
};

const Header: FC<Props> = ({
  title,
  style,
  iconName,
  titleStyle,
  dark,
  flex1,
  flex2,
  flex3,
}) => {
  return (
    <View style={[styles.upperContainerHead, style]}>
      <View style={flex1 && {...styles.flex}}>
        <BackButton
          buttonStyle={
            dark && {
              borderColor: 'white',
              backgroundColor: 'black',
            }
          }
          iconStyle={dark && {color: 'white'}}
        />
      </View>

      <View style={flex2 && {...styles.flex}}>
        <Text style={[styles.textHead, titleStyle]}>{title}</Text>
      </View>

      {iconName ? (
        <>
          <IconButton
            iconName={iconName}
            buttonStyle={
              dark && {
                borderColor: 'white',
                backgroundColor: 'black',
              }
            }
            iconStyle={dark && {color: 'white'}}
          />
        </>
      ) : (
        <View style={flex3 && {...styles.flex}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textHead: {
    textTransform: 'capitalize',
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
  upperContainerHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
});

export default Header;
