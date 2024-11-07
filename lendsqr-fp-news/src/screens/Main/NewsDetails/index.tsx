import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import { NewsDetailsRouteProp } from 'navigation/types';

export const NewsDetails = () => {
  const route = useRoute<NewsDetailsRouteProp>();

  return (
    <ScrollView
      contentContainerStyle={[
        globalStyles.wrapper,
        { paddingHorizontal: layout.pixelSizeHorizontal(20) },
      ]}
    >
      <Text
        style={[
          globalStyles.rowCenter,
          globalStyles.textHello,
          { paddingTop: layout.pixelSizeVertical(50) },
        ]}
      >
        News Details
      </Text>
      <View style={{}}>
        <View key={route?.key} style={[]}>
          <Text style={styles.textContainer}> Title: {route?.params?.title}</Text>
          <Text style={styles.textContainer}> Snippet: {route?.params?.snippet}</Text>
          <Text style={styles.textContainer}> SourceUrl: {route?.params?.source_url}</Text>
          <Text style={styles.textContainer}> SourceName: {route?.params?.source_name}</Text>
          <Text style={styles.textContainer}> Logo_Url: {route?.params?.source_logo_url}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    color: 'gray',
    fontSize: layout.fontPixel(15),
    marginBottom: layout.pixelSizeVertical(20),
    fontFamily: 'DMSans_500Medium',
  },
});
