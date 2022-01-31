import React from "react";
import {Text, View, StyleSheet, Image, Pressable, TextInput} from 'react-native';



function Calculador(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Calcular tu ahorro con la membresía</Text>
            <Text style={styles.subTitle}>¿Cuánto gastas al mes en tu peludo?</Text>
            <TextInput style={styles.input}/>
            <Pressable style={styles.btnContainer}>
                    <Text style={styles.btnText}>Calcular</Text>
            </Pressable>
            <Text style={styles.textLight}>Te ahorras</Text>
            <Text style={styles.textLightYellow}>$0</Text>
            <Text style={styles.textLight}>al año</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    title:{
        fontSize: 25,
        width: '75%',
        fontWeight: 600,
        textAlign: 'center',
        color: 'white'
    },
    subTitle:{
        fontSize: 14,
        fontWeight: 400,
        color: 'white',
        marginTop: 15
    },
    input:{
        height: 40,
        backgroundColor: '#bf93f1',
        width: '100%',
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        color: 'white',
        textAlign: "center"
    },
    btnContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#ffc200',
        width: '100%'
    },
    btnText:{
        fontWeight: '600',
        color: '#1e123a'
    },
    textLight:{
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    textLightYellow:{
        fontSize: 20,
        fontWeight: '500',
        color: '#ffc200'
    }

  });

export default Calculador;