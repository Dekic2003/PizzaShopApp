import React, {useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {deleteCart} from '../../state/actions/cart';
import ACTIONS from '../../state/actions';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {eraseCart} from '../../state/actions/cart';

export default function Cart({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  const Cart = useSelector((state) => state.cartReducer.cart);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setCart(Cart);
  }, []);

  function total() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  }

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
              backgroundColor: '#A9A9A9',
              padding: 10,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/back.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '60%', alignItems: 'center'}}>
          <Text style={styles.navText}> Cart</Text>
        </View>
        <View style={{width: '20%'}} />
      </View>

      <FlatList
        data={cart}
        renderItem={({item, index}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <View style={styles.cardContainer}>
                <View style={styles.cartCard}>
                  <View style={{width: '30%'}}>
                    <Image
                      source={{
                        uri:
                          item.img ||
                          'https://forkfeeds.com/wp-content/uploads/2019/08/pepperoni-lovers.jpg',
                      }}
                      style={{width: '100%', height: windowHeight / 6}}
                    />
                  </View>
                  <View
                    style={{
                      width: '70%',
                      backgroundColor: 'white',
                      padding: 10,
                    }}>
                    <Text style={styles.pizzaName}>{item.name}</Text>
                    <Text style={styles.pizzaOther}>Price:{item.price}$</Text>
                    <Text style={styles.pizzaOther}>
                      Delivery: {item.delivery || '15 min'}
                    </Text>
                    <TouchableOpacity
                      style={styles.buttonDel}
                      onPress={() => {
                        dispatch(deleteCart(item, cart, index));
                      }}>
                      <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: windowHeight / 5,
        }}>
        <Text style={styles.total}>Total: {total()}$</Text>
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              backgroundColor: 'white',
              height: 400,
              borderRadius: 16,
              padding: 16,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={styles.deliveryText}>Delivery is on the way</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={{flex: 1}}>
                <LottieView
                  source={require('../../assets/deliveryAnimation.json')}
                  autoPlay
                  loop={true}
                  speed={1}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                toggleModal();
                dispatch(eraseCart(cart));
                navigation.goBack();
              }}>
              <Text style={styles.buttonTxt}>Yay!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonTxt}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
