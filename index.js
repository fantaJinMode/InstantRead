/* eslint-disable react/jsx-indent */
/**
 * @format
 */

import * as React from 'react';
import {
    AppRegistry,
    useColorScheme,
} from 'react-native';
import {
    MD3DarkTheme,
    MD3LightTheme,
    PaperProvider,
} from 'react-native-paper';

import App from './App.tsx';
import { name as appName } from './app.json';
import { LightScheme } from './src/theme/lightScheme.ts';
import { DarkScheme } from './src/theme/darkScheme.ts';

const LIGHT_SCHEME = {
    ...MD3LightTheme,
    colors: LightScheme,
};

const DARK_SCHEME = {
    ...MD3DarkTheme,
    colors: DarkScheme,
};

// export default function Main() {
//     const colorScheme = useColorScheme();
//     const theme = colorScheme === 'dark' ? DARK_SCHEME : LIGHT_SCHEME;

//     return (
//         // eslint-disable-next-line react/jsx-filename-extension
//         <PaperProvider theme={theme}>
//             <App />
//         </PaperProvider>
//     );
// }

AppRegistry.registerComponent(appName, () => App);
