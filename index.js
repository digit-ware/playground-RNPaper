/**
 * @format
 */

import * as React from 'react';
import {AppRegistry, Platform} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import {
  Appbar,
  PaperProvider,
  configureFonts,
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
} from 'react-native-paper';

const fontConfig = {
  fontFamily: 'Exo2-Medium',
};

const customLightTheme = {
  ...LightTheme,
  dark: false,
  colors: {
    ...LightTheme.colors,
    primary: 'blue',
    secondary: 'yellow',
  },
  fonts: configureFonts({config: fontConfig}),
};

const customDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
  },
  fonts: configureFonts({config: fontConfig}),
};

export default function Main() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const theme = isDarkTheme ? customDarkTheme : customLightTheme;

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action
          icon={isDarkTheme ? 'moon-waning-crescent' : 'white-balance-sunny'}
          onPress={() => setIsDarkTheme(!isDarkTheme)}
        />
      </Appbar.Header>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
