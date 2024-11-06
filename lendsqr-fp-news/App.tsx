// import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from './src/navigation/NavigationContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFontsHelper } from '@hooks';
import { ThemeProvider } from 'react-native-rapi-ui';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from '@state';

const queryClient = new QueryClient();

export default function App() {
  const { appIsReady } = useFontsHelper();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
     <Provider store={store}>
      <PaperProvider>
        <ThemeProvider theme="light">
          <QueryClientProvider client={queryClient}>
            <NavigationContainer />
          </QueryClientProvider>
        </ThemeProvider>
      </PaperProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
