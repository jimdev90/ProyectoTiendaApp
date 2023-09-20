import React from 'react';
import {
  SafeAreaView
} from 'react-native';

// import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      {/* <Splash /> */}
      <Signup />
    </SafeAreaView>
  );

}
export default App;
