import React from 'react';
import { View } from 'react-native';
import { Text } from './src/Components/';

function App() {
  return (
    <View
    style={{
      flex: 1,
      alignItems: 'center', justifyContent: 'center'
    }}
    >
      <Text
      preset="headingLarge"
      italic
      bold
      style={{ color: 'black', }}
      >
        Hello World
      </Text>
    </View>
  );
}
export default App;
