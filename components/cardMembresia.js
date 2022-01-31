import React from "react";
import {Text, View, StyleSheet, Image, Button, Pressable} from 'react-native';


//iconos
const pointYellow = require('../assets/icons/pointYellow.png')
const pointLight = require('../assets/icons/pointLight.png')


function CardMembresia(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTop}>Beneficios los 365 días del año</Text>
            <View style={styles.itemDescuento}>
                <Image source={pointYellow} style={styles.point}/>
                <Text style={styles.itemText}><Text style={styles.yellow}>15%</Text> de descuento en todos los productos</Text>
            </View>
            <View style={styles.itemDescuento}>
                <Image source={pointYellow} style={styles.point}/>   
                <Text style={styles.itemText}>Domicilio <Text style={styles.yellow}>gratis</Text> <Text style={styles.light}>*a partir de $120.000</Text></Text>
            </View>
            <Text style={styles.subTitle}>Ver otros Beneficios</Text>
            <View style={styles.otrosContainer}>
                <View style={styles.itemDescuento}>
                    <Image source={pointLight} style={styles.pointLight}/>   
                    <Text style={styles.itemTextLight}>Regalo de bienvenida</Text>
                </View>
                <View style={styles.itemDescuento}>
                    <Image source={pointLight} style={styles.pointLight}/>   
                    <Text style={styles.itemTextLight}>Bono de Netflix para maratonear</Text>
                </View>
                <View style={styles.itemDescuento}>
                    <Image source={pointLight} style={styles.pointLight}/>   
                    <Text style={styles.itemTextLight}>Beneficios en restaurantes y tiendas</Text>
                </View>
                <View style={styles.itemDescuento}>
                    <Image source={pointLight} style={styles.pointLight}/>   
                    <Text style={styles.itemTextLight}>Por cada pedido que hagas, donaremos un porcentaje a una fundación. </Text>
                </View>
            </View>
            <View>
                <Text style={styles.textTop}>Paga únicamente</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>$69.900<Text style={styles.priceLight}>/año</Text></Text>
                    <Text style={styles.equivalente}>Lo que equivale a <Text style={styles.equivalenteBold}>$5.260</Text> el mes</Text>
                </View>
                <Pressable style={styles.btnContainer}>
                    <Text style={styles.btnText}>Adquirir membresía</Text>
                </Pressable>
                <Text style={styles.terminosText}>Aplican términos y condiciones</Text>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    yellow:{
        color: '#ffc200'
    },
    light:{
        fontWeight: 300,
        fontSize: 12,
        color: '#e7e1ed'
    },
    container:{
        backgroundColor: '#653f90',
        width: '90%',
        marginTop: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffc200',
        padding: 15,
        paddingTop: 20,
    },
    otrosContainer:{
        borderBottomColor: '#ffc200',
        borderBottomWidth: 1,
        borderStyle: "dashed",
        paddingBottom: 15,
        marginBottom: 15
    },
    priceContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTop:{
        fontWeight: "600",
        fontSize: 14,
        color: 'white'
    },
    itemDescuento: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15
    },
    point:{
        height: 20,
        width: 20,
        marginTop: 3, 
    },
    pointLight:{
        height: 20,
        width: 20,
    },
    itemText:{
        fontSize: 18,
        fontWeight: 600,
        marginLeft: 5,
        color: 'white'
    },
    itemTextLight:{
        fontSize: 14,
        fontWeight: 400,
        marginLeft: 5,
        color: '#e7e1ed'
    },
    subTitle:{
        fontWeight: "500",
        fontSize: 14,
        color: 'white',
        marginTop: 20,
    },
    price:{
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    },
    priceLight:{
        fontWeight: 300,
        color: '#e7e1ed'
    },
    equivalente:{
        width: 160,
        padding: 8,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        fontSize: 12,
        textAlign: 'center',
        backgroundColor: '#8a5dbc',
        fontWeight: 400,
        color: 'white'
    },
    equivalenteBold: {
        fontWeight: 800
    },
    btnContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#ffc200',
    },
    btnText:{
        fontWeight: '600'
    },
    terminosText:{
        fontSize: 12,
        color: '#ffc200',
        textAlign: 'center',
        marginTop: 5
    }
  });

export default CardMembresia;