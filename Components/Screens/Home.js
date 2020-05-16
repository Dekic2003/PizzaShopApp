import React, {useState,useEffect} from 'react';
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
import axios from 'axios';


import Navbar from "../Navbar";

export default function Home() {


    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [ response,setResponse]=useState(null);
    const [ refreshing,setRefreshing]=useState(false);

    useEffect(()=>{

        axios.get(`https://pizzashop-api.herokuapp.com/pizza`)
            .then(res =>
                {
                    setResponse(res.data);
                }
            )
    }, []);

    const styles = StyleSheet.create({
        container:{
            flex:1,

        },
        text:{
            fontSize: 16,
            fontFamily:'Montserrat',
        },
        helloContainer:{
            height:windowHeight/7,
            backgroundColor:'white',
            padding:20
        },
        helloText:{
            fontSize: 40,
            fontFamily:'Montserrat-Bold',
        },
        cardContainer:{
            flex: 1,
            alignItems:'center',
            borderRadius: 16,
            backgroundColor: 'pink',
            marginTop:10,
            overflow: 'hidden',
            width: '95%',
            elevation:10,
            justifyContent:'center',
            alignContent:'center'


        },
        pizzaCard:{
            width:'100%',
            overflow:'hidden'
        },
        pizzaRow:{
            flexDirection:'row'
        },
        pizzaName:{
            fontFamily:'Montserrat-Bold',
            fontSize:24,
            textAlign: 'center'
        },
        pizzaNameLoad:{
            fontFamily:'Montserrat-Bold',
            fontSize:40,
            textAlign: 'center'
        },
        pizzaIng:{
            fontFamily:'Montserrat',
            fontSize:12,
            padding: 5
        },
        button:{
            backgroundColor:'#FEBC40',
            padding:15,
            width:'80%',
            borderRadius: 20,
            alignItems: 'center'
        },
        buttonText:{
            fontFamily:'Montserrat-Bold'
        },
        pizzaPrice:{
            fontFamily:'Montserrat-Bold',
        }




    });

    if(response===null){
        return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/pizza.png')} style={{width:'70%',height: '20%'}}/>
            <Text style={styles.pizzaNameLoad}>Pizza Shop</Text>
            <ActivityIndicator size="large" color="#0000ff"/>
        </View>





    }


    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Navbar/>

            <View  style={styles.helloContainer}>
                <Text style={styles.helloText}>Hello</Text>
                <Text style={styles.text}>Which pizza do you want to eat?</Text>
            </View>
            {/*
                    response.map((item,i)=>
                    {
                        return <View key={i} >

                            <Image source={{uri: 'https://forkfeeds.com/wp-content/uploads/2019/08/pepperoni-lovers.jpg'}} style={{width:50,height:50}}/>
                            <Text>{item.name}</Text>
                            <Text>{item.ingredients}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    })
                */}
            <FlatList


                data={response}
                renderItem={({item})=> {
                    return <View style={{alignItems: 'center'}}>
                        <View style={styles.cardContainer}>
                            <View style={styles.pizzaCard}>
                                <ImageBackground source={{uri: item.img || 'https://forkfeeds.com/wp-content/uploads/2019/08/pepperoni-lovers.jpg'}} style={{width: windowWidth, height: windowHeight/2.5}}>
                                    <View style={{height: '55%'}}/>
                                    <View style={{height: '45%', backgroundColor: 'white', opacity: 0.8, padding: 10}}>
                                        <Text style={styles.pizzaName}>{item.name}</Text>
                                        <Text style={styles.pizzaIng}>Ingredients: {item.ingredients}</Text>

                                        <View style={styles.pizzaRow}>
                                            <View style={{width:'50%'}}>
                                                <Text style={styles.pizzaPrice}>Price:{item.price}$</Text>
                                                <Text style={styles.pizzaPrice}>Delivery:{item.delivery}</Text>


                                            </View>
                                            <View style={{width:'50%'}}>
                                                <TouchableOpacity style={styles.button}>
                                                    <Text style={styles.buttonText}>Add to Cart</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                }}
                keyExtractor={(item, index) => index.toString()}
                /*refreshing={refreshing}
                onRefresh={()=>setRefreshing(true)}*/



            />


        </View>


    )
}
