import React from "react";
import {Text, View, StyleSheet, Image} from 'react-native';

const backIcon = require('../assets/icons/back.png');

function Header(){
    return(
        <View>
            <Image source={backIcon} style={styles.backIcon}/>
            <View style={styles.container}>
                <Text style={styles.title}>
                    LAIKA <Text style={styles.titleYellow}>Member</Text>
                </Text>
                <Text style={styles.subTitle}>
                    Conviertete en miembro, recibe beneficios exclusivos y dale lo mejor a tu mascota
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center"
    },
    backIcon: {
        height: 30,
        width: 30,
        marginTop: 15,
        marginLeft: 20
    },
    title:{
        fontSize: 35,
        fontWeight: 700,
        color: 'white'
    },
    titleYellow: {
        color: '#ffc200'
    },
    subTitle: {
        color: '#e7e1ed',
        fontWeight: 300,
        fontSize: 16,
        width: '82%',
        textAlign: 'center'
    }
  });

export default Header;