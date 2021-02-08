import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Pizza from '../../../assets/SignUp.jpg';
import signUp from '../../../state/actions/SignUp';
import {useDispatch} from 'react-redux';

const SignUp = ({navigation}) => {
  const styles = StyleSheet.create({
    Background: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    Title: {
      fontFamily: 'Montserrat',
      fontSize: 32,
    },
    Input: {
      width: '100%',
      borderColor: '#FEBC40',
      borderBottomWidth: 1,
      marginTop: 20,
    },
    button: {
      backgroundColor: '#FEBC40',
      padding: 15,
      borderRadius: 25,
      alignItems: 'center',
      marginTop: 20,
      elevation: 5,
      borderColor: 'white',
      borderWidth: 2,
    },
    SUbutton: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 25,
      alignItems: 'center',
      marginTop: 15,
      elevation: 5,
      borderColor: '#FEBC40',
      borderWidth: 2,
    },
    buttonTxt: {
      fontFamily: 'Montserrat-Bold',
    },
    Line: {
      flex: 1,
      height: 1,
      backgroundColor: 'gray',
    },
  });
  const [name, enterName] = useState('');
  const [email, enterEmail] = useState('');
  const [pass, enterPass] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <ImageBackground source={Pizza} style={styles.Background}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <View style={{height: '100%', justifyContent: 'flex-end'}}>
              <View
                style={{
                  height: '60%',
                  backgroundColor: 'white',
                  opacity: 0.95,
                  borderTopRightRadius: 48,
                  borderTopLeftRadius: 48,
                  padding: 40,
                }}>
                <Text style={styles.Title}>Sign Up</Text>
                <TextInput
                  style={styles.Input}
                  placeholder="Name"
                  placeholderTextColor="gray"
                  onChangeText={(name) => enterName(name)}
                  value={name}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="E-mail"
                  placeholderTextColor="gray"
                  onChangeText={(email) => enterEmail(email)}
                  value={email}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Password"
                  placeholderTextColor="gray"
                  secureTextEntry={true}
                  onChangeText={(pass) => enterPass(pass)}
                  value={pass}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    dispatch(signUp(name, email, pass));
                  }}>
                  <Text style={styles.buttonTxt}>Sign Up</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <View style={{flex: 1, height: 2, backgroundColor: 'gray'}} />
                  <View>
                    <Text
                      style={{
                        width: 40,
                        textAlign: 'center',
                        fontFamily: 'Montserrat',
                      }}>
                      or
                    </Text>
                  </View>
                  <View style={{flex: 1, height: 2, backgroundColor: 'gray'}} />
                </View>
                <TouchableOpacity
                  style={styles.SUbutton}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Text style={styles.buttonTxt}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default SignUp;
