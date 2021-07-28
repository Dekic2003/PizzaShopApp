import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {AvatarGenerator} from 'random-avatar-generator';

const UserScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const avatarNum = Math.floor(Math.random()*8)+1;
  const user=useSelector((state)=>state.AuthReducer.User)
  console.log(user)
  const avatar = [
    require('../../../assets/Avatars/avataaars(0).png'),
    require('../../../assets/Avatars/avataaars(1).png'),
    require('../../../assets/Avatars/avataaars(2).png'),
    require('../../../assets/Avatars/avataaars(3).png'),
    require('../../../assets/Avatars/avataaars(4).png'),
    require('../../../assets/Avatars/avataaars(5).png'),
    require('../../../assets/Avatars/avataaars(6).png'),
    require('../../../assets/Avatars/avataaars(7).png'),
    require('../../../assets/Avatars/avataaars(8).png'),
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    navContainer: {
      top: 0,
      height: windowHeight / 12,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    navText: {
      fontSize: 32,
      fontFamily: 'Montserrat',
    },
    cardContainer: {
      flex: 1,
      alignItems: 'center',
      borderRadius: 16,
      backgroundColor: 'pink',
      marginTop: 10,
      overflow: 'hidden',
      width: '85%',
      elevation: 20,
      justifyContent: 'center',
      alignContent: 'center',
      marginBottom: 10,
    },
    cartCard: {
      width: '100%',
      overflow: 'hidden',
      flexDirection: 'row',
    },
    pizzaName: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 24,
      textAlign: 'center',
    },
    pizzaNameLoad: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 40,
      textAlign: 'center',
    },
    pizzaOther: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#FEBC40',
      padding: 15,
      borderRadius: 25,
      alignItems: 'center',
      marginTop: 20,
      elevation: 5,
    },
    buttonYay: {
      backgroundColor: '#FEBC40',
      padding: 15,
      borderRadius: 25,
      alignItems: 'flex-end',
      marginTop: 20,
      elevation: 5,
    },
    buttonText: {
      fontFamily: 'Montserrat-Bold',
    },
    pizzaPrice: {
      fontFamily: 'Montserrat-Bold',
    },
    total: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 40,
      textAlign: 'center',
    },
    buttonTxt: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 32,
      textAlign: 'center',
    },
    buttonDel: {
      backgroundColor: '#FEBC40',
      padding: 10,
      borderRadius: 25,
      alignItems: 'center',
      marginTop: 5,
      elevation: 5,
    },
    deliveryText: {
      fontFamily: 'Montserrat-Bold',
      textAlign: 'center',
      fontSize: 16,
    },
  });
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.navContainer}>
        <View style={{width: '20%', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              elevation:10
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../../assets/back.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '60%', alignItems: 'center'}}>
          <Text style={styles.navText}> User</Text>
        </View>
        <View style={{width: '20%'}} />
      </View>
      <View style={{backgroundColor: 'white',padding:5,justifyContent:'center',alignItems:'center'}}>
        <Image source={avatar[avatarNum]} style={{width: 200, height: 200}} />
        <Text style={{marginTop:10,fontSize:24,fontWeight:'bold'}}> {user ? user.name : ''}</Text>
      </View>
    </View>
  );
};
export default UserScreen;
