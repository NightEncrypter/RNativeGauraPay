import {View, Text, Image, Modal} from 'react-native';
import React, {FC, ReactNode} from 'react';
import theme from '../theme/theme';
import IconButton from './buttons/IconButton';
import NormalButton from './buttons/NormalButton';

type Props = {
  openModal: boolean;
  closeModal: Function;
  children: ReactNode;
  whiteContainerStyle?: Object;
  transparentStyle?: Object;
};

const CustomModal: FC<Props> = ({
  children,
  openModal,
  whiteContainerStyle,
  transparentStyle,
  closeModal,
}) => {
  return (
    <Modal visible={openModal} animationType="slide" transparent>
      <View
        style={[
          {
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
          transparentStyle,
        ]}>
        <View
          style={[
            {
              backgroundColor: theme.secondary.backgroundColor,
              padding: 20,
              width: '90%',
              borderRadius: 10,
            },
            whiteContainerStyle,
          ]}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <IconButton
              onPress={() => closeModal()}
              iconName="times"
              buttonStyle={{width: 30, height: 30}}
              iconStyle={{color: theme.primary.backgroundColor}}
              iconSize={16}
            />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
