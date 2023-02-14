import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OpeningPage from './src/components/OpeningPage';
import ConversionPage from './src/components/ConversionPage';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer navigate={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="QuantityMeasurement"
          options={{
            headerStyle: {
              backgroundColor: 'darkgrey',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 50,
            },
          }}
          component={OpeningPage}
        />
        <Stack.Screen name="Conversion" component={ConversionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
