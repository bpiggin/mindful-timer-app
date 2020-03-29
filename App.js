import React, { useState, useEffect } from "react";
import AppContainer from "./navigation/AppContainer";
import * as Font from "expo-font";

export default App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded ? <AppContainer /> : null;
};
