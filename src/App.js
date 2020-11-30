import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from './pages/SignIn';
import SignUpScreen from './pages/SignUp';
import HomeScreen from './pages/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
