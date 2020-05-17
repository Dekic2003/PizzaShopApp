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
    TouchableOpacity
} from 'react-native';


export default function Cart({route,navigation}) {


const Cart= route.params.cart;


    return(
        <View style={{flex:1}}>
<FlatList

    data={Cart}
    renderItem={({item})=> {
        return<View>

            <Text>{item.name}</Text>

        </View>

    }}
    keyExtractor={(item, index) => index.toString()}


/>





        </View>

        );}

