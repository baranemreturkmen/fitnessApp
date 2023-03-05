import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

/*screenOptions={{
                headerShown: false,
            }}*/
//Sayfalarda ki headers'ı yok etmek istersen eğer Stack.Navigator componentin içerisinde bunu kullanabilirsin.

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreen" component={Welcome}></Stack.Screen>
                <Stack.Screen name="MemberSignScreen" component={MemberSign}></Stack.Screen>
                <Stack.Screen name="MemberResultScreen" component={MemberResult}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App; 