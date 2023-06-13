import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar, PaperProvider } from 'react-native-paper';

// import { theme } from "./src/utils/theme.prop";

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <PaperProvider >
      <SafeAreaView style={styles.container}>
        <View style={styles.firstContient}>
          <Searchbar
            tyle={styles.Searchbar}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.secondContent}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  firstContient: {
    marginTop: StatusBar.currentHeight,
    padding: 10,
    justifyContent: "center",
  },
  Searchbar:{
    borderRadius: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  secondContent: {
    padding: 16,
    flex: 1,
    backgroundColor: "blue",
  },
});
