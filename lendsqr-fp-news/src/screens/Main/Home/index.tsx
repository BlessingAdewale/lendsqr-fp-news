import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { layout } from '@utils';
import { LinearGradient } from 'expo-linear-gradient';

const image = require('../../../assets/error-image.png');

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
    staleTime: Infinity,
  });

  if (isPending) return <ActivityIndicator animating={true} size={'large'} color="#161616" />;

  if (error) return <Text>An error has occurred: {error.message} </Text>;

  if (data) console.log(data);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity>
      <View style={styles.card} key={item.id}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.photo_url}`,
          }}
        />
        <Text style={styles.title}>{item.title.slice(0, 55)}.</Text>
        <Text style={styles.published}>
          Published on {item.published_datetime_utc.slice(0, 10)}
        </Text>
        <Text style={styles.published}>By {item.source_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <ImageBackground
          source={isPending ? image : { uri: `${data?.data[0]?.photo_url}` }}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            overflow: 'hidden',
            borderBottomLeftRadius: layout.fontPixel(40),
            borderBottomRightRadius: layout.fontPixel(40),
          }}
          // resizeMode='cover'
        >
          <LinearGradient
            colors={[' rgba(214, 208, 208, 0.521)', ' rgba(66, 57, 57, 0.521)']}
            style={styles.background}
          />
          <View style={styles.headContent}></View>
        </ImageBackground>
      </View>
      <View
        style={{
          paddingHorizontal: layout.pixelSizeHorizontal(23),
          marginTop: layout.pixelSizeVertical(25),
          marginBottom: layout.pixelSizeVertical(30),
        }}
      >
        <Text style={styles.textContainer}>
          <Text style={styles.breakingNews}>Breaking News</Text>
          {''}
          <Text style={styles.more}>More</Text>
        </Text>
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
    width: '100%',
    height: layout.heightPixel(700),
    // borderBottomLeftRadius: layout.fontPixel(40),
    // borderBottomRightRadius: layout.fontPixel(40),
  },
  headContent: {
    marginTop: layout.pixelSizeVertical(52),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  image: {
    width: layout.widthPixel(240),
    height: layout.heightPixel(170),
    borderRadius: layout.fontPixel(25),
    marginLeft: layout.pixelSizeHorizontal(23),
  },
  card: {},
  title: {
    fontSize: layout.size.h3,
    fontFamily: 'DMSans_500Medium',
    marginLeft: layout.pixelSizeHorizontal(23),
    maxWidth: layout.widthPixel(250),
    marginTop: layout.pixelSizeVertical(15),
    marginBottom: layout.pixelSizeVertical(11),
  },
  published: {
    fontSize: layout.size.h4,
    fontFamily: 'DMSans_400Regular',
    marginLeft: layout.pixelSizeHorizontal(23),
    color: 'grey',
  },
  background: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: layout.heightPixel(700),
  },
});
