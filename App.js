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
    ImageBackground
} from 'react-native';
import axios from 'axios';


import Navbar from "./Components/Navbar";

export default function App() {



const windowHeight = Dimensions.get('window').height;

const [ response,setResponse]=useState(null);

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
            flex:1
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
            margin:10,
            overflow: 'hidden',
            width: '90%',
            elevation:10,


        },
        pizzaCard:{
            width:'100%',
            overflow:'hidden'
        }



    });

    if(response===null){
        return <ActivityIndicator/>




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
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                <FlatList
                    data={response}
                    renderItem={({item})=>{
                        return <View style={styles.cardContainer}>
                            <View style={styles.pizzaCard}>
                                <ImageBackground source={{uri: 'https://forkfeeds.com/wp-content/uploads/2019/08/pepperoni-lovers.jpg'}} style={{width: 400,height: 200,}}>
                                    <View style={{height: '65%'}}/>
                                    <View style={{height:'35%',backgroundColor:'white',bottom:0,opacity:0.9,padding: 10}}>
                                        <Text>{item.name}</Text>

                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                    }}
                    keyExtractor={(item, index) => index.toString()}



                />
                </View>

    <View>
        <Text> Cart</Text>
    </View>
</View>


    )
}
