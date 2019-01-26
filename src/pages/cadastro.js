import React, {Component} from 'react';
import {View, Text,Button} from 'react-native';

export class Cadastro extends Component {

    static navigationOptions = {
        title: "Cadastro"
    };

    render(){
        return (<View >
                    <Button title="voltar"   
                        onPress={() => {                                
                                    this.props.navigation.goBack()
                                }}>                        
                    </Button> 
                </View>
        ); 
    }

}

export default Cadastro;