import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet } from 'react-native';
import Map from './Map'


const MapScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
           <Map/>
        </SafeAreaView>
    )
}

export default MapScreen