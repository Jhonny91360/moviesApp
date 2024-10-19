/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying} = useMovies();
  const navigation = useNavigation();
  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 20}}>
        <Text>Home Screen</Text>
        <PosterCarousel movies={nowPlaying} />
      </View>
    </ScrollView>
  );
};
