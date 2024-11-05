// import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from './src/navigation/NavigationContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFontsHelper } from '@hooks';

const queryClient = new QueryClient();

export default function App() {
  const { appIsReady } = useFontsHelper();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer />
      </QueryClientProvider>
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
