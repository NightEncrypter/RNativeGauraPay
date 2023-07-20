import {View, Text} from 'react-native';
import React from 'react';
import UserDetails from './UserDetails';

const PanCard = () => {
  return (
    <UserDetails
      docText="fill your pan card detail"
      step="1"
      //   imgUrl="../assets/img/adhaar.png"
      page="PAN"
    />
  );
};

export default PanCard;
