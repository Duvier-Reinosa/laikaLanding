import React from "react";
import {Text, View, StyleSheet, Image, Button} from 'react-native';


//iconos
const pointYellow = require('../assets/icons/pointYellow.png')


function CardMembresia(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTop}>Beneficios lso 365 días del año</Text>
            <View style={styles.itemDescuento}>
                <Image source={pointYellow} style={styles.point}/>
                <Text style={styles.itemText}><Text style={styles.yellow}>15%</Text> de descuento en todos los productos</Text>
            </View>
            <View style={styles.itemDescuento}>
                <Image source={pointYellow} style={styles.point}/>   
                <Text style={styles.itemText}>Domicilio <Text style={styles.yellow}>gratis</Text> <Text style={styles.light}>*a partir de $120.000</Text></Text>
            </View>
            {/* //lita */}
            <View>
                <Text>Paga únicamente</Text>
                <View>
                    <Text>$69.900<Text>/año</Text></Text>
                    <View>
                        <Text>Lo que equivale a <Text>$5.260</Text> el mes</Text>
                    </View>
                </View>
                <Button title="Adquirir membresía"/>
                <Text>Aplican términos y condiciones</Text>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    yellow:{
        color: '#ffc200'
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
    textTop:{
        fontWeight: "600",
        fontSize: 14,
        color: 'white'
    },
    itemDescuento: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    point:{
        height: 20,
        width: 20,
        marginTop: 3, 
    },
    itemText:{
        fontSize: 18,
        fontWeight: 600,
        marginLeft: 5,
        color: 'white'
    }
  });

export default CardMembresia;