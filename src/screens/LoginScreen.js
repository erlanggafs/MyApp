import React from 'react';
import {Button, Text, View} from 'react-native';

const LoginScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Button onPress={() => navigation.navigate('Home')} title="CONTINUE" />
    </View>
  );
};

export default LoginScreen;
