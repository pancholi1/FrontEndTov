import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { store } from "./navigation/redux/store/store";
import "expo-dev-client";
import { useEffect } from "react";
export default function App() {
  const isLoadingComplete = useCachedResources();

  async function cargarFuentes() {
    console.log("asds");
    await Font.loadAsync({
      Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
      Poppins_ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
      Poppins_SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    });
  }

  useEffect(() => {
    cargarFuentes();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
