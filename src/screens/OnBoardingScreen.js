import React from 'react';
import {Button, Text, View} from 'react-native';

const OnBoardingScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>OnBoarding</Text>
      <Button
        onPress={() => navigation.navigate('Register')}
        title="REGISTER"
      />
      <Button onPress={() => navigation.navigate('Login')} title="LOGIN" />
    </View>
  );
};

export default OnBoardingScreen;
