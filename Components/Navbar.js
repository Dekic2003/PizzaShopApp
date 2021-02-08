import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const styles = StyleSheet.create({
    container: {
      top: 0,
      height: windowHeight / 12,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      elevation: 2,
    },
    text: {
      fontSize: 32,
      fontFamily: 'Montserrat',
    },
  });

  return (
    <View style={styles.container}>
      <View style={{width: '20%', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#A9A9A9',
            padding: 10,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image
            source={require('../assets/Cart.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
      <View style={{width: '60%', alignItems: 'center'}}>
        <Text style={styles.text}>Pizza Shop</Text>
      </View>
      <View style={{width: '20%', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#A9A9A9',
            padding: 10,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          onPress={() => {
            navigation.navigate('Cart', cart);
          }}>
          <Image
            source={require('../assets/Cart.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
