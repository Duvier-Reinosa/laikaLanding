import React from "react";
import {Text, View, StyleSheet, Image } from 'react-native';

//iconos
const card = require('../assets/card_member.png');

//componentes
import Header from '../components/header';
import CardMembresia from '../components/cardMembresia'
import Calculador from "../components/calculador";
import Experiencias from "../components/experiencias"


function Container(){
    return(
        <View style={styles.container}>
            <Header/>
            <Image source={card} style={styles.card}/>
            <CardMembresia/>
            <Calculador/>
            <Experiencias/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a47cd0',
        display: "flex",
        alignItems: "center"
    },
    backIcon: {
        height: 30,
        width: 30
    },
    card:{
        width: '82%',
        height: 180,
        borderRadius: 15,
        marginTop: 30
    }
  });
export default Container;
