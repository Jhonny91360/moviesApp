/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 20}}>
        <Text>Home Screen</Text>
        {/* Carrusel principal */}
        <PosterCarousel movies={nowPlaying} />
        {/* Peliculas populares */}
        <HorizontalCarousel movies={popular} title="Populares" />
        {/* Peliculas mejores calificadas */}
        <HorizontalCarousel movies={topRated} title="Mejor Calificadas" />
        {/* Proximamente */}
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
