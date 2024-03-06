import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Botones({ name, onPress }){
    return(
        <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 20 }}>
          <Icon name={name} size={50} color="#000" />
        </TouchableOpacity>
)
}