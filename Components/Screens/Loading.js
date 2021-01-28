import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/pizza.png')}
        style={{width: '100%', height: '50%'}}
      />
      <Text style={ {
          fontFamily: 'Montserrat-Bold',
          fontSize: 40,
          textAlign: 'center',
      }}>Pizza Shop</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
export default Loading;
