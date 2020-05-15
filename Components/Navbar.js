import React from 'react';
import { Text, View,Dimensions,StatusBar,StyleSheet,Image} from 'react-native';

export default function Navbar() {


    const windowHeight = Dimensions.get('window').height;
    const styles = StyleSheet.create({
        container:{
            top:0,
            height:windowHeight/12,
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row'

        },
        text:{
            fontSize: 32,
            fontFamily:'Montserrat',
        }


    });

return(<View style={styles.container}>
            <Text style={styles.text}>Pizza Shop</Text>
        </View>);





}
