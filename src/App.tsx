/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Calculations from './screen/Calculations';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Result from './screen/Result';

export type RootStackParamList = {
  Calculations: undefined;
  Result:{ height: number,weight: number } ;
};
const Stack = createNativeStackNavigator<RootStackParamList>();


function App(): JSX.Element {
 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Calculations">
      <Stack.Screen name="Calculations" 
      component={Calculations}
      options={{ 
        title: 'BMI CALCULATOR',
        headerTitleAlign: 'center',
         headerStyle: {
          backgroundColor: 'black', 
          
        }, 
        headerTintColor: 'white', 
      } } 
       />
      <Stack.Screen name="Result" component={Result} 
      options={{ 
        title: 'BMI CALCULATOR',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'black', 
          
        }, 
        headerTintColor: 'white', 
      } } />
    </Stack.Navigator>
  </NavigationContainer>
  //   <SafeAreaView >
  //    <Calculations/>
  //   </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
