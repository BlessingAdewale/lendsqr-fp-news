import {
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
import { BlurView } from 'expo-blur';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { globalStyles } from '@globalStyles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native-paper';
import { images } from '@constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeTabNavigationProp, HomeTabRouteProp } from 'navigation/types';

export interface ItemProps {
  item : {
    id: any; 
    title: string;
    link: string;
    snippet: string;
    photo_url: string;
    thumbnail_url: string;
    published_datetime_utc: string;
    source_url: string;
    source_name: string;
    source_logo_url: string;
    source_favicon_url: string;
    source_publication_id: string;
    related_topics: [];
    sub_articles: [];
    story_id: string;
  },
}


export const Home = () => {
  const navigation = useNavigation<HomeTabNavigationProp>();
   const route = useRoute<HomeTabRouteProp>()

  const { isPending, error, data, isLoading, isFetching } = useQuery({
    queryKey: ['2cbf29b8bbmsh8f707308d165848p11c674jsn4a338bb6adc2'],
    queryFn: () =>
      fetch(
        'https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiW0NCQVNQZ29JTDIwdk1EZGpNWFlTQW1WdUdnSlZVeUlQQ0FRYUN3b0pMMjB2TURKdFpqRnVLaGtLRndvVFIwRkVSMFZVWDFORlExUkpUMDVmVGtGTlJTQUJLQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURkak1YWVNBbVZ1R2dKVlV5Z0FQAVAB&limit=500&country=US&lang=en',
        {
          headers: {
            'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
            'x-rapidapi-key': '2cbf29b8bbmsh8f707308d165848p11c674jsn4a338bb6adc2',
          },
        },
      ).then((res) => res.json()),
    staleTime: Infinity,
  });

  if (isLoading)
    return (
      <View style={[{ flex: 1 }, globalStyles.columnCenter]}>
        <Text style={[globalStyles.textCreate]}>
          <ActivityIndicator animating={true} size={80} color="#ef4046" />;
        </Text>
      </View>
    );

  if (error) return <Text>An error has occurred: {error.message} </Text>;

  if (data) console.log(data);

  const renderItem = ({ item }: ItemProps) => (
    <TouchableOpacity onPress={() => {
      navigation.navigate('NewsDetails')}}
      >
      <View key={item.id}>
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
        <StatusBar style="light" />
        <ImageBackground
          source={{ uri: `${data?.data[0]?.photo_url}` }}
          defaultSource={images.errorImage}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            overflow: 'hidden',
            borderBottomLeftRadius: layout.fontPixel(50),
            borderBottomRightRadius: layout.fontPixel(50),
          }}
        >
          <LinearGradient
            colors={['transparent', '#110']}
            start={{ x: 1.2, y: 1 }}
            style={styles.background}
          />
          <View style={styles.headContent}>
            <TouchableOpacity>
              <Entypo
                name="menu"
                size={44}
                color="white"
                style={{
                  marginTop: layout.pixelSizeVertical(320),
                  marginBottom: layout.pixelSizeVertical(60),
                }}
              />
            </TouchableOpacity>
            <BlurView intensity={10} style={styles.blurContainer}>
              <Text style={styles.text}>News of the day</Text>
            </BlurView>
            <Text style={styles.headingText}>{data?.data[0]?.title.slice(0, 63)}</Text>
            <TouchableOpacity
              style={[globalStyles.rowStart, styles.learnMoreContainer]}
              // onPress={() => navigation.navigate('NewsDetails', { data: data?.data[0] })}
            >
              <Text style={styles.learnMore}>Learn More</Text>
              <FontAwesome name="long-arrow-right" size={23} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          paddingHorizontal: layout.pixelSizeHorizontal(23),
          marginTop: layout.pixelSizeVertical(25),
          marginBottom: layout.pixelSizeVertical(30),
        }}
      >
        <View style={globalStyles.rowBetween}>
          <View>
            <Text style={styles.breakingNews}>Breaking News</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.more}>More</Text>
          </TouchableOpacity>
        </View>
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
    color: '#ef4046',
    marginRight: layout.pixelSizeHorizontal(162),
  },
  more: {
    fontSize: layout.size.h3,
    fontFamily: 'SpaceGrotesk_500Medium',
    color: '#ef4046',
    position: 'absolute',
    right: -100,
    left: -54,
    bottom: -100,
    top: -10,
  },
  headContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#fff',
    width: '100%',
    height: layout.heightPixel(750),
  },
  headContent: {
    marginTop: layout.pixelSizeVertical(52),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  image: {
    width: layout.widthPixel(240),
    height: layout.heightPixel(130),
    borderRadius: layout.fontPixel(25),
    marginLeft: layout.pixelSizeHorizontal(23),
  },
  title: {
    fontSize: layout.size.h3,
    fontFamily: 'DMSans_500Medium',
    marginLeft: layout.pixelSizeHorizontal(23),
    maxWidth: layout.widthPixel(250),
    marginTop: layout.pixelSizeVertical(15),
    marginBottom: layout.pixelSizeVertical(11),
    color: '#ef4046',
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
    height: layout.heightPixel(750),
  },
  blurContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    height: layout.heightPixel(35),
    width: layout.widthPixel(150.1),
    marginBottom: layout.pixelSizeVertical(15),
  },
  text: {
    fontSize: layout.size.h4,
    fontFamily: 'DMSans_500Medium',
    marginHorizontal: layout.pixelSizeHorizontal(16),
    color: '#efe5e5',
  },
  headingText: {
    fontSize: layout.size.h1,
    fontFamily: 'DMSans_500Medium',
    color: '#fff',
    maxWidth: 300,
    // paddingRight: layout.pixelSizeHorizontal(58)
  },
  learnMore: {
    fontSize: layout.size.h3,
    fontFamily: 'DMSans_500Medium',
    color: '#efe5e5',
    paddingRight: layout.pixelSizeHorizontal(12),
  },
  arrow: {},
  learnMoreContainer: {
    marginTop: layout.pixelSizeVertical(15),
  },
});
