import React, {useState,useEffect} from 'react';
import { Text, View,ActivityIndicator,Image} from 'react-native';
import axios from 'axios';

export default function App() {

const [ response,setResponse]=useState(null);

    useEffect(()=>{

        axios.get(`https://pizzashop-api.herokuapp.com/pizza`)
            .then(res =>
                {
                    setResponse(res.data);
                }
            )
    }, {})

    if(response===null){
        return <ActivityIndicator/>

    }

    return(
        <View style={{flex:1}}>

                {
                    response.map((item,i)=>
                    {
                        return <View key={i}>
                                <Text >{item.name}</Text>
                                <Image source={{uri: 'https://forkfeeds.com/wp-content/uploads/2019/08/pepperoni-lovers.jpg'}} style={{width:50,height:50}}/>
                        </View>
                    })
                }


            </View>


    )
}
