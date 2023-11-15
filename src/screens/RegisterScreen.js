import React from 'react';
import {Button, Text, View} from 'react-native';

const RegisterScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Register</Text>
      <Button onPress={() => navigation.navigate('Home')} title="CONTINUE" />
    </View>
  );
};

export default RegisterScreen;
