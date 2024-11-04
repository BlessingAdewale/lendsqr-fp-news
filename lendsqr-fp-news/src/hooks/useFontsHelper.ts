import { useEffect, useState } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import {
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from '@expo-google-fonts/dm-sans';

import {
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk';

export const useFontsHelper = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          DMSans_400Regular,
          DMSans_400Regular_Italic,
          DMSans_500Medium,
          DMSans_500Medium_Italic,
          DMSans_700Bold,
          DMSans_700Bold_Italic,
          SpaceGrotesk_300Light,
          SpaceGrotesk_400Regular,
          SpaceGrotesk_500Medium,
          SpaceGrotesk_600SemiBold,
          SpaceGrotesk_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    async function removeSplashScreen() {
      if (appIsReady) await SplashScreen.hideAsync();
    }
    removeSplashScreen();
  }, [appIsReady]);

  return { appIsReady };
};
