import React, { Component } from 'react'; 
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import App from './App';

export default class Signup extends Component{

    constructor(props){
        super(props)
        this.State={
            username: '',
            password: ''
        }
    }

    validate_field=()=>{
        const { username, password} = this.state
        if(username ==''){
            alert('username')
            return false
        } else if( password == ''){
            alert('password')
            return false
        }
        return true
    }

making_api_call=()=>{
    if(this.validate_field()){
        alert('voce tem acesso')
    }
}


    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.headerTxt}>WELCOME</Text>
            <View style={styles.subView}>
                <Text style={styles.subTxt}></Text>

                <TextInput 
                onChangeText={(value )=>this.setState({username: value}) }
                style={styles.nameInput} placeholder='Username'/>


                <TextInput 
                onChangeText={(value )=>this.setState({password: value}) }
                style={styles.nameInput} placeholder='Password'/>
                
                <TouchableOpacity 
                onPress={() => this.making_api_call()}
                
                style={styles.btn}
                     onPress= {()=> this.props.navigation.navigate('Restaurante')}>
                    <Text style={styles.btnTxt}>SignUp</Text>
                    </TouchableOpacity>
                   
                    
                    <TouchableOpacity style={styles.endBtn}
                    onPress= {()=> this.props.navigation.navigate('login')}>
                        <Text style={styles.LoginTxt}>LogIn</Text>
                    </TouchableOpacity>
                </View>
    
            </View>
          
        );
    }
}

const styles= StyleSheet.create({
    container: {
        height: 500,
    
    },
    subView:{
        borderStartColor: 'white',
        height: 400,
        marginTop: 90,
        borderTopRightRadius: 80,
        borderTopLeftRadius: 40,
    },
    headerTxt: {
        fontSize: 40,
        marginLeft: 90,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute',
        marginTop: 65,
    },
    nameInput:{
        height: 40,
        width: 300,
        marginLeft: 45,
        borderBottomWidth:2,
        marginTop: 12,
    },
    btn: {
        height: 50,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginLeft: 90,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        
    },
    endView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    endTxt: {
       fontSize: 15,
       marginTop: 20,
       marginLeft: 9,
       fontWeight: 'bold',
       
    },
    endBtn: {
        marginRight: 80,
        marginTop: 5,
        marginLeft: 10,
    },
    LoginTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 145,
        color: 'black',
    },
});