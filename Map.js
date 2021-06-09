
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const Map = () => {
    return (
        <MapView
         style={styles.map}
         loadingEnabled={true}
         region={{
             latitude: -27.587293701967727,
             longitude: -48.55210753029392,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121
         }}
         >
            <MapView.Marker
             coordinate={{
                 latitude: -27.585102800796584,
                 longitude: -48.54642553734161,
             }}
             title={"Banda"}
             description={"Rua Bocaiúva 2304, Centro, Florianópolis - SC,"}
             />

             <MapView.Marker
             coordinate={{
                 latitude: -27.587293701967727,
                 longitude: -48.55210753029392,
             }}
             title={"restaurante"}
             description={"Rua Bocaiúva 2045, Centro, Florianópolis - SC"}
             />

        </MapView>
    )
}


const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map;