import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import { exp } from "react-native-reanimated";
import ResultsShowScreen from "./src/screens/ResultShowScreen";
//first arg of createstacknavigator is all the routes the browser has
const navigator = createStackNavigator(
  {
    Search: SearchScreen, //the key names are arbitrary
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search", //think of it as the homepage
    defaultNavigationOptions: {
      //this option applies to all screens
      title: "Restaurant Search",
    },
  }
);
export default createAppContainer(navigator);
//createAppContainer creates a react component using whatever's passed in it, because there's no react component here to be exported.
