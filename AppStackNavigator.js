import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import  RecieverDetails from '../screens/RecieverDetails';

export const AppStackNavigator = createStackNavigator({
    BookDonateList:{
        screen:BookDonateScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    RecieverDetails:{
        screen:RecieverDetails,
        navigationOptions:{
            headerShown:false
        }
    }
},
{
    initialRouteName:'BookDonateList'
})