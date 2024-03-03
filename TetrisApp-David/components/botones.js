import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Botones({ name, onPress }){
        <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 10 }}>
          <Icon name={name} size={30} color="#000" />
        </TouchableOpacity>

}