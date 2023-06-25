import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOwald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import {theme} from './src/infrastructure/theme'

import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigator from "./src/infrastructure/navigation";

// import { theme } from "./src/utils/theme.prop";


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
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigator />
          </RestaurantContextProvider>  
        </LocationContextProvider>
      </ThemeProvider>
      
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}


