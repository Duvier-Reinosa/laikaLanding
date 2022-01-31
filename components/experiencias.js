import React from "react";
import {Text, View, StyleSheet, Image, Button, TextInput} from 'react-native';


//imgs
const img1 = require('../assets/img/one.png');
const img2 = require('../assets/img/two.png');
const img3 = require('../assets/img/three.png');



function Esperiecias(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Experiencias de LAIKA <Text style={styles.yellow}>Members</Text></Text>
            <View style={styles.card}>
                <Image source={img1} style={styles.cardImg}/>
                <View style={styles.parrafers}>
                    <Text style={styles.cardParrafer}>Me convertí en LaikaMember y todo se volvió más fácil.</Text>
                    <Text style={styles.cardParraferLight}>Con los beneficios de LaikaMember aseguro los mejores precios sumado de regalos que le encantan a mi perro y la comodidad de que todo llega a la puerta de mi casa.</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={img2} style={styles.cardImg}/>
                <View style={styles.parrafers}>
                    <Text style={styles.cardParrafer}>Soy LaikaMember y nunca gabía logrado ahorrar tanto en las compras para mi mascota.</Text>
                    <Text style={styles.cardParraferLight}>Con el descuento de la Membresía me ahorro más de 50 mil pesos al mes y 600 mil pesos al año.</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={img2} style={styles.cardImg}/>
                <View style={styles.parrafers}>
                    <Text style={styles.cardParrafer}>Me encatan ser parte del club LaikaMember..</Text>
                    <Text style={styles.cardParraferLight}>Logro consentir mucho a mi mascota y además se que con mis compras ayudo a mascotas necesitos.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    yellow: {
        color: '#ffc200'
    },
    container:{
        marginTop: 30,
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 15
    },
    title:{
        fontSize: 30,
        width: '75%',
        margin: 'auto',
        textAlign: 'center',
        color: 'white',
        fontWeight: 600,
        marginBottom: 10
    },
    card:{
        backgroundColor: '#653f90',
        padding: 10,
        borderRadius: 15,
        height: 140,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardImg:{
        height: '95%',
        width: '30%',
        borderRadius: 10
    },
    parrafers:{
        flexDirection: 'column',
        width: '60%',
        marginLeft: 10
    },
    cardParrafer:{
        width: '100%',
        color: 'white',
        fontWeight: 600,
        fontSize: 14
    },
    cardParraferLight:{
        color: '#e7e1ed',
        fontWeight: 300,
        fontSize: 11
    }
  });

export default Esperiecias;