import * as React from 'react';
import {HomePage, ScanNFC} from "./components/Homepage";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={HomePage}
              options={{title: 'Welcome'}}
          />
          <Stack.Screen name="ScanNFC" component={ScanNFC} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
