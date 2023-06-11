import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {Platform, StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const isAndroid = Platform.OS === 'android'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.firstContient}>
          <Text>Search</Text>
        </View>
        <View style={styles.secondContent}>
          <Text>list</Text>
        </View>
        
      </SafeAreaView>
      <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContient:{
    marginTop: StatusBar.currentHeight, 
    // marginTop: isAndroid ? 20:0,
    padding: 16,
    backgroundColor:"green",
    justifyContent: "center"
  },
  secondContent: {
    padding:16,
    flex: 1,
    backgroundColor:"blue",
  }
});
