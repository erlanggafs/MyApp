import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button
        onPress={() =>
          navigation.reset({
            index: 1,
            routes: [{name: 'OnBoarding'}],
          })
        }
        title="LOGOUT"
      />
    </View>
  );
};

export default HomeScreen;
