import { ImageBackground, StyleSheet, Text, View } from 'react-native';
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
    <View style={[globalStyles.wrapper]}>
      <View style={styles.topContainer}>
        <ImageBackground
          // source={route.params.photo_Url}
          // defaultSource={images.errorImage}
          style={{
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <LinearGradient
            colors={['transparent', '#110']}
            start={{ x: 0.5, y: 0.6 }}
            style={styles.background}
          />
        </ImageBackground>
      </View>
      <View style={styles.bottomContainer}>
        <View style={[{ paddingVertical: 60 }, globalStyles.columnCenter]}>
          <Text> Title</Text>
          <Text>SubTitle</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // height: layout.heightPixel(990),
  },
  bottomContainer: {
    height: '90%',
    backgroundColor: 'red',
    borderTopLeftRadius: layout.fontPixel(55),
    borderTopRightRadius: layout.fontPixel(55),
    marginBottom: -100,
  },
  topContainer: {
    backgroundColor: 'blue',
    marginTop: -30,
  },
});
