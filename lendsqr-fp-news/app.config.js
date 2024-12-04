import 'dotenv/config';
export default {
  expo: {
    name: 'lendsqr-fp-news',
    slug: 'lendsqr-fp-news',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
      googleServicesFile: './GoogleService-Info.plist',
      bundleIdentifier: 'LendSqr',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.adeleke_blessing.lendsqrfpnews',
    },
    newArchEnabled: true,
    // scheme: 'lendSqr-App',
    web: {
      favicon: './src/assets/favicon.png',
    },
    plugins: [
      [
        'expo-font',
        {
          "fonts": 'node_modules/@expo-google-fonts/space-grotesk',
          
          "fonts": 'node_modules/@expo-google-fonts/dm-sans',

        },
      ],
    ],

    extra: {
      expoKey: process.env.EXPO_KEY,
      iosKey: process.env.IOS_KEY,
      androidKey: process.env.ANDROID_KEY,
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      eas: {
        projectId: 'd515ed4f-a417-4394-828b-45f660b0305d',
      },
    },
  },
};
