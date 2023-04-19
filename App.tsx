import React from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <StatusBar hidden />
      <View>
        <ImageBackground
          source={require('Eleusis/assets/background.webp')}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}></ImageBackground>
      </View>
    </>
  );
}

export default App;
