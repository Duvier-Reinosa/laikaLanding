import React from "react";
import {Text, View, StyleSheet, Image, Button, TextInput} from 'react-native';



function Calculador(){
    return(
        <View>
            <Text>Calcular tu ahorro con la membresía</Text>
            <Text>Cuánto gastas al mes en tu peludo?</Text>
            <TextInput/>
            <Button title="Calcular"/>
            <Text>Te ahorras</Text>
            <Text>$0</Text>
            <Text>al año</Text>
        </View>
    )
}

const styles = StyleSheet.create({

  });

export default Calculador;