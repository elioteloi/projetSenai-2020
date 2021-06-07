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
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121
         }}
         >
            <MapView.Marker
             coordinate={{
                 latitude: 37.78925,
                 longitude: -122.4324,
             }}
             title={"Banda"}
             description={"description 2"}
             />

             <MapView.Marker
             coordinate={{
                 latitude: 37.78825,
                 longitude: -122.4324,
             }}
             title={"restaurante"}
             description={"description 1"}
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