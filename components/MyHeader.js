import React, { Component } from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { View, Text, StyeSheet, Alert } from 'react-native';
import { Header } from 'react-native-elements';

const MyHeader = (props) => {
  return (
    <Header
      placement="left"
      backgroundColor="green"
      centerComponent={{
        text: props.title,
        style: { color: 'yellow', fontSize: RFValue(24), fontWeight: 'bold' ,alignSelf:'center'},
      }}
    />
  );
};
export default MyHeader;
