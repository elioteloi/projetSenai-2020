import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import HomeScreen from './HomeScreen'
import FindScreen from './FindScreen'
import PostScreen from './PostScreen'

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90,
                ... styles.shadow
            },
        }}
        >

        <Tab.Screen name="Post" component={PostScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                source={require('./assets/wine.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'black' : '#748c94'
                }}

                />
                <Text style={{color: focused ? 'black' : '#748c94', fontSize: 12}}>
                    Evento
                </Text>
            </View>
        ),
        }}/>

        <Tab.Screen name="rating" component={FindScreen}options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                source={require('./assets/star.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'black' : '#748c94'
                }}

                />
                <Text style={{color: focused ? 'black' : '#748c94', fontSize: 12}}>
                    Banda
                </Text>
            </View>
        ),
        }} />
        
        <Tab.Screen name="Home" 
        component={HomeScreen}
        options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                source={require('./assets/map.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'black' : '#748c94'
                }}

                />
                <Text style={{color: focused ? 'black' : '#748c94', fontSize: 12}}>
                    Mapa
                </Text>
            </View>
        ),
        }} 
        />
        
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});




export default Tabs;