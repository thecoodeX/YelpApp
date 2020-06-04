import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Restaurants from './src/screens/restaurants';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: Restaurants
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Search Food"
    }
  }
);

export default createAppContainer(navigator);
