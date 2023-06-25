import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { PaperProvider } from 'react-native-paper';
import RestaurantScreens from "./src/features/restaurants/screens/restaurants.screens";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOwald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import {theme} from './src/infrastructure/theme'
import { Text } from "./src/components/typography/text.component";
import { SafeArea } from "./src/components/utiliy/safe-area.component";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";

// import { theme } from "./src/utils/theme.prop";
const Tab = createBottomTabNavigator();

const SettingsScreen = () =><SafeArea><Text variant="caption">Settings</Text>
</SafeArea> 
const MapScreen = () =>
  <SafeArea>
    <Text variant="caption">Map screen</Text>
  </SafeArea>  

export default function App() {

  let [oswaldLoaded] = useOwald({
    Oswald_400Regular
  })
  let [latoLoaded] = useLato({
    Lato_400Regular
  })

  if(!oswaldLoaded || !latoLoaded){
    return null
  }

  const TAB_ICON = {
    Restaurants: ["md-restaurant", 'md-restaurant-outline'],
    Map: ["md-map", "md-map-outline"],
    Settings: ["md-settings", "md-settings-outline"]
  }; 


  const createScreenOptions = ({ route }) => { 
    

    return {
      tabBarIcon: ({focused, size, color}) => {
        let iconName = TAB_ICON[route.name][0]
        // console.log(iconName)
        iconName = focused?
          TAB_ICON[route.name][0]:
          TAB_ICON[route.name][1]
        ;

        return ( <Ionicons name={iconName} size={size} color={color} />)
      }
      
      ,
      headerShown: false,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }
  }

  // const screenOptions = ({ route }) => ({
  //   tabBarIcon: ({ focused, color, size }) => {
  //     let iconName;

  //     if (route.name === 'Restaurants') {
  //       iconName = focused
  //         ? 'md-restaurant'
  //         : 'md-restaurant-outline';
  //     } else if (route.name === 'Settings') {
  //       iconName = focused ? 'md-settings' : 'md-settings-outline';
  //     } else if (route.name === 'Map'){
  //       iconName = focused ? 'md-map' : 'md-map-outline';
  //     }

  //     // You can return any component that you like here!
  //     return <Ionicons name={iconName} size={size} color={color} />;
  //   },
  //   headerShown: false,
  //   tabBarActiveTintColor: 'tomato',
  //   tabBarInactiveTintColor: 'gray',

  // });

  return (
    <PaperProvider >
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RestaurantContextProvider>
            <Tab.Navigator
              screenOptions={createScreenOptions}
            >
              <Tab.Screen name="Restaurants" component={RestaurantScreens} />         
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </RestaurantContextProvider>
        </NavigationContainer>
      </ThemeProvider>
      
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}


