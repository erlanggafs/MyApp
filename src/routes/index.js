import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  RegisterScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

function RootNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default RootNav;
