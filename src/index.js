import React from 'react';
import Main from './pages/main';
import Cadastro from './pages/cadastro';
import {createAppContainer, createStackNavigator} from 'react-navigation';

const Routes = createStackNavigator(
    {   
        Main: {
            screen: Main    
        },   
        Cadastro: {
            screen: Cadastro
        }
    },
    {
      initialRouteName: 'Main'
    }   
);

const App = createAppContainer(Routes);

export default App;