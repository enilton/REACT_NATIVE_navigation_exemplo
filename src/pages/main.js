import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Main extends Component{

    static navigationOptions = {
        title: "Principal"
    };

    render(){
        return (<View>
                    <Button title="cadastro"  
                        onPress={() => {                                
                                    this.props.navigation.navigate('Cadastro')
                                }}>
                    </Button> 
                </View>
        ); 
    }
};

export default Main;