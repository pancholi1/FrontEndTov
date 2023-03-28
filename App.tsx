import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import * as Font from "expo-font";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  async function cargarFuentes() {
    await Font.loadAsync({
      Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
      Poppins_ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
      Poppins_SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    });
  }

  cargarFuentes();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
