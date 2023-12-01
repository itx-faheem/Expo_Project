import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Splash from "./screens/Splash";
import React, { useState, useEffect } from "react";

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return null;

  const Stack = createStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        {/* {splashScreen ? (
          <Stack.Screen name="Splash" component={Splash} />
          // <Stack.Screen name="Home" component={Home} />
        ) : (
          <> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          {/* </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
