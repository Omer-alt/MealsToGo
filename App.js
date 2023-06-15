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

import {theme} from './src/infrastructure/theme'

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

  return (
    <PaperProvider >
      <ThemeProvider theme={theme}>
        <RestaurantScreens/>
      </ThemeProvider>
      
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}


