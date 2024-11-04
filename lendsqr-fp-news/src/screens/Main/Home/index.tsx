import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['5fdd1a0d8bmshbdac0579e14c36cp19edb3jsna0ed94a1a318'],
    queryFn: () =>
      fetch(
        'https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiW0NCQVNQZ29JTDIwdk1EZGpNWFlTQW1WdUdnSlZVeUlQQ0FRYUN3b0pMMjB2TURKdFpqRnVLaGtLRndvVFIwRkVSMFZVWDFORlExUkpUMDVmVGtGTlJTQUJLQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURkak1YWVNBbVZ1R2dKVlV5Z0FQAVAB&limit=500&country=US&lang=en',
        {
          headers: {
            'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
            'x-rapidapi-key': '5fdd1a0d8bmshbdac0579e14c36cp19edb3jsna0ed94a1a318',
          },
        },
      ).then((res) => res.json()),
  });

  if (isPending) return <ActivityIndicator animating={true} size={95} color="#110" />;

  if (error) return <Text>An error has occurred: {error.message} </Text>;

  const renderItem = React.useCallback(
    ({ item }) => (
      <View>
        <Text>{item.title}</Text>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
   
      <TouchableOpacity>
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={true}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ffffff',
  },
});
