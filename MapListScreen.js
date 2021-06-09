
import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text,  } from 'react-native';

const MapListScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
             <Text style={{ frontSize: 50 }}>MapListScreen</Text>
             <Map />
        </SafeAreaView>
    )
}

export default MapListScreen