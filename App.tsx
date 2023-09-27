import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Text} from './src/components';
import {theme} from './src/theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24, backgroundColor: 'black'}}>
          <Text preset="headingLarge" italic bold>
            NUBBLE App
          </Text>

          <Button title="Click me" mb="s12" />
          <Button title="Outline" mb="s12" disabled preset="outline" />
          <Button title="Outline" mb="s12" disabled preset="primary" />
          <Button loading title="mensagem" mt="s10" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
