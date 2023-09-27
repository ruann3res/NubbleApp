import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components';
import {theme} from './src/theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic bold>
            NUBBLE App
          </Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
