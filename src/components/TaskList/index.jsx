import React from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native'
import { stylesTaskList } from "./styles";
import * as Animatable from 'react-native-animatable'; 


export default function TaskList({ data, handleDelete }) {
    return(
        <Animatable.View 
        style={stylesTaskList.container}
        animation='bounceIn'
        useNativeDriver
        >

            <TouchableOpacity style={stylesTaskList.buttonCheck} onPress={() => handleDelete(data)}>
                <Image 
                style={stylesTaskList.buttonCheck}
                source={require('../../../assets/checkList.png')}/>
            </TouchableOpacity>

            <View>
                <Text style={stylesTaskList.task}> {data.task} </Text>
            </View>

        </Animatable.View>
    )
}