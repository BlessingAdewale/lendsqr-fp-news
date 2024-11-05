import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { layout } from '@utils';

export const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['ce12c9aabemshc511d2300593e02p110812jsnfc8259a91719'],
    queryFn: () =>
      fetch(
        'https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiW0NCQVNQZ29JTDIwdk1EZGpNWFlTQW1WdUdnSlZVeUlQQ0FRYUN3b0pMMjB2TURKdFpqRnVLaGtLRndvVFIwRkVSMFZVWDFORlExUkpUMDVmVGtGTlJTQUJLQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURkak1YWVNBbVZ1R2dKVlV5Z0FQAVAB&limit=500&country=US&lang=en',
        {
          headers: {
            'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
            'x-rapidapi-key': 'ce12c9aabemshc511d2300593e02p110812jsnfc8259a91719',
          },
        },
      ).then((res) => res.json()),
  });

  if (isPending) return <ActivityIndicator animating={true} size={'large'} color="#161616" />;

  if (error) return <Text>An error has occurred: {error.message} </Text>;

  if (data) console.log(data);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity>
      <View key={item.id}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.photo_url}`,
          }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.headContent}></View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.breakingNews}>Breaking News</Text>
        <Text style={styles.more}>More</Text>
      </View>

      <View>
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={true}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  breakingNews: {
    fontSize: layout.size.h1,
    fontFamily: 'DMSans_700Bold',
  },
  more: {
    fontSize: layout.size.h3,
    fontFamily: 'SpaceGrotesk_500Medium',
  },
  headContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#fff',
    backgroundColor: 'blue',
    width: '100%',
    height: layout.heightPixel(700),
    borderBottomLeftRadius: layout.fontPixel(40),
    borderBottomRightRadius: layout.fontPixel(40),
  },
  headContent: {
    marginTop: layout.pixelSizeVertical(52),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    marginTop: layout.pixelSizeVertical(25),
  },
  image: {
    width: layout.widthPixel(70),
    height: layout.heightPixel(30),
    borderRadius: layout.fontPixel(25),
  },
});
